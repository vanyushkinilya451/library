import { renderHook, act } from "@testing-library/react";
import { useDebounce } from "./useDebounce";

jest.useFakeTimers(); // включаем фейковые таймеры

describe("useDebounce", () => {
  afterEach(() => {
    jest.clearAllTimers(); // очищаем таймеры после каждого теста
  });

  test("возвращает начальное значение сразу", () => {
    const { result } = renderHook(() => useDebounce("a", 500));

    expect(result.current).toBe("a"); // сразу должно быть начальное значение
  });

  test("обновляет значение после задержки", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: "a", delay: 500 } }
    );

    // меняем value
    rerender({ value: "b", delay: 500 });

    // до таймаута значение не должно измениться
    expect(result.current).toBe("a");

    // прокручиваем таймер на 500ms
    act(() => {
      jest.advanceTimersByTime(500);
    });

    // теперь значение обновилось
    expect(result.current).toBe("b");
  });

  test("сбрасывает предыдущий таймер при быстром изменении значения", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: "a", delay: 500 } }
    );

    // быстро меняем значение несколько раз
    rerender({ value: "b", delay: 500 });
    rerender({ value: "c", delay: 500 });
    rerender({ value: "d", delay: 500 });

    // прокручиваем 499ms — должно быть старое значение
    act(() => {
      jest.advanceTimersByTime(499);
    });
    expect(result.current).toBe("a");

    // прокручиваем ещё 1ms — таймер должен сработать только для последнего значения
    act(() => {
      jest.advanceTimersByTime(1);
    });
    expect(result.current).toBe("d");
  });
});
