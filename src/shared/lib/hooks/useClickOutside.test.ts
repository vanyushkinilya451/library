import { fireEvent, renderHook } from "@testing-library/react";
import { useClickOutside } from "./useClickOutside";

test("calls callback when click is outside refs", () => {
  const callback = jest.fn();

  // создаём refs
  const refInside = { current: document.createElement("div") };
  const refOutside = { current: document.createElement("div") };

  document.body.appendChild(refInside.current!);

  renderHook(() => useClickOutside([refInside, refOutside], callback));

  // клик внутри
  fireEvent.mouseDown(refInside.current!);
  expect(callback).not.toHaveBeenCalled();

  // клик вне
  fireEvent.mouseDown(document.body);
  expect(callback).toHaveBeenCalledTimes(1);

  document.body.removeChild(refInside.current!);
});
