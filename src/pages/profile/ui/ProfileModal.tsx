import type { UserProfile } from "entities/user";
import { getUserProfile } from "entities/user";
import React, { useRef, useState } from "react";
import {
  st,
  supabase,
  useAppDispatch,
  useAppSelector,
  useClickOutside,
} from "shared/lib";
import styled from "styled-components";

export const ProfileModal = ({ closeModal }: { closeModal: () => void }) => {
  const user = useAppSelector((state) => state.user.user);
  const { profile } = useAppSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef(null);
  useClickOutside([modalRef], handleClose);
  const dispatch = useAppDispatch();
  const [userAttributes, setUserAttributes] = useState<UserProfile>({
    firstname: profile?.firstname || "",
    lastname: profile?.lastname || "",
    birthdate: profile?.birthdate || "",
    gender: profile?.gender || "",
    patronymic: profile?.patronymic || "",
  });

  function handleClose() {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
    }, 300);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAttributes({ ...userAttributes, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      const { error } = await supabase.from("profiles").upsert(
        {
          user_id: user?.id,
          firstname: userAttributes.firstname,
          lastname: userAttributes.lastname,
          patronymic: userAttributes.patronymic,
          birthdate: userAttributes.birthdate,
          gender: userAttributes.gender,
        },
        {
          onConflict: "user_id",
          ignoreDuplicates: false,
        }
      );

      if (error) {
        console.error("Ошибка при сохранении профиля:", error);
      } else {
        handleClose();
        if (user) {
          dispatch(getUserProfile(user.id));
        }
      }
      setIsLoading(false);
    } catch (err) {
      console.error("Неожиданная ошибка:", err);
    }
  };

  return (
    <ModalOverlay isClosing={isClosing}>
      <ModalContent
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        isClosing={isClosing}
      >
        <ModalHeader>
          <ModalTitle>
            {profile ? "Редактирование профиля" : "Заполнения профиля"}
          </ModalTitle>
          <CloseButton onClick={handleClose}>
            <CloseIcon>×</CloseIcon>
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <FormSection>
            <FormGrid>
              <FormField>
                <FormLabel>Фамилия</FormLabel>
                <FormInput
                  type="text"
                  placeholder="Введите фамилию"
                  name="lastname"
                  value={userAttributes.lastname}
                  onChange={handleChange}
                />
              </FormField>

              <FormField>
                <FormLabel>Имя</FormLabel>
                <FormInput
                  type="text"
                  placeholder="Введите имя"
                  name="firstname"
                  value={userAttributes.firstname}
                  onChange={handleChange}
                />
              </FormField>

              <FormField>
                <FormLabel>Отчество</FormLabel>
                <FormInput
                  type="text"
                  placeholder="Введите отчество"
                  name="patronymic"
                  value={userAttributes.patronymic}
                  onChange={handleChange}
                />
              </FormField>

              <FormField>
                <FormLabel>Дата рождения</FormLabel>
                <FormInput
                  type="date"
                  name="birthdate"
                  value={userAttributes.birthdate}
                  onChange={handleChange}
                />
              </FormField>
            </FormGrid>

            <FormField>
              <FormLabel>Пол</FormLabel>
              <RadioGroup>
                <RadioOption>
                  <RadioInput
                    type="radio"
                    name="gender"
                    value="male"
                    id="male"
                    checked={userAttributes.gender === "male"}
                    onChange={handleChange}
                  />
                  <RadioLabel htmlFor="male">
                    <RadioCircle />
                    Мужской
                  </RadioLabel>
                </RadioOption>
                <RadioOption>
                  <RadioInput
                    type="radio"
                    name="gender"
                    value="female"
                    id="female"
                    checked={userAttributes.gender === "female"}
                    onChange={handleChange}
                  />
                  <RadioLabel htmlFor="female">
                    <RadioCircle />
                    Женский
                  </RadioLabel>
                </RadioOption>
              </RadioGroup>
            </FormField>
          </FormSection>
        </ModalBody>

        <ModalFooter>
          <CancelButton onClick={handleClose}>Отмена</CancelButton>
          <SaveButton onClick={handleSave} disabled={isLoading}>
            {profile ? "Сохранить изменения" : "Сохранить профиль"}
          </SaveButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div<{ isClosing: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${st("zIndices", "modal")};
  padding: 20px;
  animation: ${({ isClosing }) =>
    isClosing ? "fadeOut 0.3s ease-out" : "fadeIn 0.3s ease-out"};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const ModalContent = styled.div<{ isClosing: boolean }>`
  background: ${st("colors", "background")};
  border-radius: ${st("borderRadius", "xl")};
  box-shadow: ${st("shadows", "modal")};
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  transition: all 0.3s ease-out;
  animation: ${({ isClosing }) =>
    isClosing ? "slideOut 0.3s ease-out" : "slideIn 0.3s ease-out"};
  transform-origin: center;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: scale(0.9) translateY(-20px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slideOut {
    from {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
    to {
      opacity: 0;
      transform: scale(0.9) translateY(-20px);
    }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px 20px;
  border-bottom: 1px solid ${st("colors", "secondary")};

  @media (max-width: ${st("breakpoints", "sm")}) {
    padding: 10px 30px;
  }
`;

const ModalTitle = styled.h2`
  font-size: ${st("fontSizes", "xl")};
  font-weight: 700;
  color: ${st("colors", "primaryLight")};
  margin: 0;

  @media (max-width: ${st("breakpoints", "sm")}) {
    font-size: ${st("fontSizes", "lg")};
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 12px;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;

  &:hover {
    transform: scale(1.1);
    background: ${st("colors", "backgroundSecondary")};
  }

  &:active {
    transform: scale(0.95);
  }
`;

const CloseIcon = styled.span`
  font-size: ${st("fontSizes", "xl")};
  color: ${st("colors", "textSecondary")};
  font-weight: 300;
  line-height: 1;

  @media (max-width: ${st("breakpoints", "sm")}) {
    font-size: ${st("fontSizes", "lg")};
  }

  ${CloseButton}:hover & {
    color: ${st("colors", "danger")};
  }
`;

const ModalBody = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 40px;
  align-items: start;

  @media (max-width: ${st("breakpoints", "md")}) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;

  @media (max-width: ${st("breakpoints", "sm")}) {
    grid-template-columns: 1fr;
    gap: 13px;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${st("breakpoints", "sm")}) {
    gap: 5px;
  }
`;

const FormLabel = styled.label`
  font-size: ${st("fontSizes", "md")};
  font-weight: 600;
  color: ${st("colors", "textPrimary")};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: ${st("breakpoints", "sm")}) {
    font-size: ${st("fontSizes", "sm")};
  }
`;

const FormInput = styled.input`
  padding: 12px 16px;
  border: 1px solid ${st("colors", "secondary")};
  border-radius: ${st("borderRadius", "md")};
  font-size: ${st("fontSizes", "md")};
  transition: ${st("transitions", "colors")};
  background: ${st("colors", "background")};
  color: ${st("colors", "textPrimary")};

  @media (max-width: ${st("breakpoints", "sm")}) {
    font-size: ${st("fontSizes", "sm")};
  }

  &:focus {
    outline: none;
    border-color: ${st("colors", "primary")};
    box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.1);
  }

  &::placeholder {
    color: ${st("colors", "textMuted")};
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

const RadioOption = styled.div`
  display: flex;
  align-items: center;
`;

const RadioInput = styled.input`
  display: none;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: ${st("fontSizes", "md")};
  color: ${st("colors", "textPrimary")};
  transition: ${st("transitions", "colors")};

  @media (max-width: ${st("breakpoints", "sm")}) {
    font-size: ${st("fontSizes", "sm")};
  }

  &:hover {
    color: ${st("colors", "primary")};
  }
`;

const RadioCircle = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${st("colors", "secondary")};
  border-radius: 50%;
  position: relative;
  transition: ${st("transitions", "colors")};

  input[type="radio"]:checked + label & {
    border-color: ${st("colors", "primary")};
    background: ${st("colors", "primary")};

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      background: ${st("colors", "textWhite")};
      border-radius: 50%;
    }
  }
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  padding: 20px 30px;
  border-top: 1px solid ${st("colors", "secondary")};
  background: ${st("colors", "backgroundSecondary")};
  border-radius: 0 0 ${st("borderRadius", "xl")} ${st("borderRadius", "xl")};

  @media (max-width: ${st("breakpoints", "sm")}) {
    justify-content: center;
  }
`;

const CancelButton = styled.button`
  padding: 12px 24px;
  border: 2px solid ${st("colors", "secondary")};
  background: ${st("colors", "backgroundSecondary")};
  color: ${st("colors", "textPrimary")};
  border-radius: ${st("borderRadius", "md")};
  font-size: ${st("fontSizes", "md")};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${st("shadows", "card")};
  border-style: none;

  @media (max-width: ${st("breakpoints", "sm")}) {
    font-size: ${st("fontSizes", "sm")};
  }

  &:hover {
    border-color: ${st("colors", "textSecondary")};
    background: ${st("colors", "background")};
    transform: translateY(-1px);
    box-shadow: none;
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

const SaveButton = styled.button`
  padding: 12px 24px;
  border: none;
  background: ${st("gradients", "primary")};
  color: ${st("colors", "textWhite")};
  border-radius: ${st("borderRadius", "md")};
  font-size: ${st("fontSizes", "md")};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: ${st("breakpoints", "sm")}) {
    font-size: ${st("fontSizes", "sm")};
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${st("shadows", "hoverLift")};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: ${st("opacity", "disabled")};
    cursor: not-allowed;
    transform: none;
  }
`;
