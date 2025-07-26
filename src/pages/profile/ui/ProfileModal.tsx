import { getUserProfile } from 'entities/user/model/UserSlice';
import React, { useRef, useState } from 'react';
import {
  supabase,
  useAppDispatch,
  useAppSelector,
  useClickOutside,
} from 'shared/lib';
import styled from 'styled-components';
import type { UserProfile } from '../lib/types';

export const ProfileModal = ({ closeModal }: { closeModal: () => void }) => {
  const user = useAppSelector((state) => state.user.user);
  const { profile } = useAppSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef(null);
  useClickOutside([modalRef], closeModal);
  const dispatch = useAppDispatch();
  const [userAttributes, setUserAttributes] = useState<UserProfile>({
    firstname: profile?.firstname || '',
    lastname: profile?.lastname || '',
    birthdate: profile?.birthdate || '',
    gender: profile?.gender || '',
    patronymic: profile?.patronymic || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAttributes({ ...userAttributes, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      const { error } = await supabase.from('profiles').upsert(
        {
          user_id: user?.id,
          firstname: userAttributes.firstname,
          lastname: userAttributes.lastname,
          patronymic: userAttributes.patronymic,
          birthdate: userAttributes.birthdate,
          gender: userAttributes.gender,
        },
        {
          onConflict: 'user_id',
          ignoreDuplicates: false,
        },
      );

      if (error) {
        console.error('Ошибка при сохранении профиля:', error);
      } else {
        closeModal();
        if (user) {
          dispatch(getUserProfile(user.id));
        }
      }
      setIsLoading(false);
    } catch (err) {
      console.error('Неожиданная ошибка:', err);
    }
  };

  return (
    <ModalOverlay>
      <ModalContent
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader>
          <ModalTitle>
            {profile ? 'Редактирование профиля' : 'Заполнения профиля'}
          </ModalTitle>
          <CloseButton onClick={closeModal}>
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
                    checked={userAttributes.gender === 'male'}
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
                    checked={userAttributes.gender === 'female'}
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
          <CancelButton onClick={closeModal}>Отмена</CancelButton>
          <SaveButton
            onClick={handleSave}
            disabled={isLoading}
          >
            {profile ? 'Сохранить изменения' : 'Сохранить профиль'}
          </SaveButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px 20px;
  border-bottom: 1px solid var(--border-color);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 10px 30px;
  }
`;

const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }
`;

const CloseIcon = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: var(--text-secondary);
  font-weight: 300;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

const ModalBody = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 40px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 13px;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 5px;
  }
`;

const FormLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

const FormInput = styled.input`
  padding: 12px 16px;
  border: 2px solid var(--border-color);
  border-radius: 12px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: all 0.3s ease;
  background: white;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
  }

  &::placeholder {
    color: var(--text-muted);
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
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: var(--text-primary);
  transition: color 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  &:hover {
    color: var(--primary-color);
  }
`;

const RadioCircle = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid var(--border-color);
  border-radius: 50%;
  position: relative;
  transition: all 0.3s ease;

  input[type='radio']:checked + label & {
    border-color: var(--primary-color);
    background: var(--primary-color);

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      background: white;
      border-radius: 50%;
    }
  }
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  padding: 20px 30px;
  border-top: 1px solid var(--border-color);
  background: var(--background-secondary);
  border-radius: 0 0 20px 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: center;
  }
`;

const CancelButton = styled.button`
  padding: 12px 24px;
  border: 2px solid var(--border-color);
  background: white;
  color: var(--text-primary);
  border-radius: 12px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  &:hover {
    border-color: var(--text-secondary);
    background: var(--background-secondary);
  }
`;

const SaveButton = styled.button`
  padding: 12px 24px;
  border: none;
  background: var(--gradient-primary);
  color: white;
  border-radius: 12px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
