import { switchTheme } from "entities/theme";
import { st, useAppDispatch, useAppSelector } from "shared/lib";
import { styled } from "styled-components";

export const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.theme);

  const handleToggle = () => {
    dispatch(switchTheme());
  };

  return (
    <ToggleContainer>
      <ToggleButton onClick={handleToggle} $isDark={currentTheme === "dark"}>
        <ToggleTrack $isDark={currentTheme === "dark"}>
          <ToggleThumb $isDark={currentTheme === "dark"}>
            {currentTheme === "light" ? "☀️" : "🌑"}
          </ToggleThumb>
        </ToggleTrack>
      </ToggleButton>
    </ToggleContainer>
  );
};

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleButton = styled.button<{ $isDark: boolean }>`
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: ${st("borderRadius", "full")};
  transition: ${st("transitions", "colors")};
  padding: 4px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ToggleTrack = styled.div<{ $isDark: boolean }>`
  width: 44px;
  height: 22px;
  background: ${({ $isDark }) =>
    $isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.3)"};
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: ${st("borderRadius", "full")};
  position: relative;
  transition: ${st("transitions", "colors")};
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const ToggleThumb = styled.div<{ $isDark: boolean }>`
  position: absolute;
  top: 1px;
  left: ${({ $isDark }) => ($isDark ? "23px" : "1px")};
  width: 18px;
  height: 18px;
  background: ${st("colors", "textWhite")};
  border-radius: ${st("borderRadius", "full")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${st("fontSizes", "xs")};
  transition: ${st("transitions", "transform")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  color: ${({ $isDark }) =>
    $isDark ? st("colors", "primary") : st("colors", "accent")};
`;
