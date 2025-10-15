import { act, renderHook } from "@testing-library/react";
import { useModal } from "./useModal";

describe("useModal", () => {
  test("модальное окно закрыто по умолчанию", () => {
    const { result } = renderHook(() => useModal());
    expect(result.current.isModalOpen).toBe(false);
  });

  test("модальное окно открывается через openModal", () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.closeModal();
      result.current.openModal();
    });

    expect(result.current.isModalOpen).toBe(true);
  });

  test("модальное окно закрывается через closeModal", () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.openModal();
      result.current.closeModal();
    });
    expect(result.current.isModalOpen).toBe(false);
  });

  test("модальное окно закрывается и открывается через toggle", () => {
    const { result } = renderHook(() => useModal());

    // изначально false → true
    act(() => {
      result.current.toggleModal();
    });
    expect(result.current.isModalOpen).toBe(true);

    // true → false
    act(() => {
      result.current.toggleModal();
    });

    expect(result.current.isModalOpen).toBe(false);
  });
});
