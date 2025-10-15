import { act, renderHook } from "@testing-library/react";
import { useEndOfPage } from "./useEndOfPage";

jest.mock("shared/lib", () => ({
  CONSTANTS: {
    LIMITS: { CATEGORIES_LIMIT: 10 },
  },
}));

const { CONSTANTS } = jest.requireMock("shared/lib");

describe("useEndOfPage", () => {
  beforeEach(() => {
    // Сбрасываем положение страницы перед каждым тестом
    Object.defineProperty(document.body, "scrollHeight", {
      value: 1000,
      writable: true,
    });
    Object.defineProperty(window, "innerHeight", {
      value: 500,
      writable: true,
    });
    Object.defineProperty(window, "scrollY", {
      value: 0,
      writable: true,
    });
  });

  test("инициализация — categoriesLimit = CATEGORIES_LIMIT", () => {
    const { result } = renderHook(() => useEndOfPage());
    expect(result.current.categoriesLimit).toBe(
      CONSTANTS.LIMITS.CATEGORIES_LIMIT
    );
  });

  test("не увеличивается, если не достигнут конец страницы", () => {
    const { result } = renderHook(() => useEndOfPage());
    act(() => {
      // Не докрутили до конца страницы
      window.scrollY = 200;
      window.dispatchEvent(new Event("scroll"));
    });
    expect(result.current.categoriesLimit).toBe(
      CONSTANTS.LIMITS.CATEGORIES_LIMIT
    );
  });

  test("увеличивается, если достигнут конец страницы", () => {
    const { result } = renderHook(() => useEndOfPage());
    act(() => {
      // Скроллим до самого низа
      window.scrollY = 600; // 600 + 500 = 1100 >= 1000
      window.dispatchEvent(new Event("scroll"));
    });
    expect(result.current.categoriesLimit).toBe(
      CONSTANTS.LIMITS.CATEGORIES_LIMIT * 2
    );
  });

  test("удаляет слушатель скролла при размонтировании", () => {
    const addSpy = jest.spyOn(window, "addEventListener");
    const removeSpy = jest.spyOn(window, "removeEventListener");

    const { unmount } = renderHook(() => useEndOfPage());

    expect(addSpy).toHaveBeenCalledWith("scroll", expect.any(Function));

    unmount();

    expect(removeSpy).toHaveBeenCalledWith("scroll", expect.any(Function));

    addSpy.mockRestore();
    removeSpy.mockRestore();
  });
});
