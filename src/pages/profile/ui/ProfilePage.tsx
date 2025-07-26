import type { User } from '@supabase/supabase-js';
import { useGetAllMyBooksQuery } from 'entities/book';
import { getUserProfile } from 'entities/user/model/UserSlice';
import { useEffect, useMemo, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {
  formatDate,
  supabase,
  theme,
  useAppDispatch,
  useAppSelector,
  useModal,
} from 'shared/lib';
import { FullScreenLoader, SkeletonLoader } from 'shared/ui';
import styled from 'styled-components';
import type { UserProfile } from '../../../entities/user/model/UserSlice';
import { ProfileModal } from './ProfileModal';

export const ProfilePage = () => {
  const { user }: { user: User | null } = useAppSelector((state) => state.user);
  const { profile }: { profile: UserProfile | null } = useAppSelector(
    (state) => state.user,
  );
  const { isModalOpen, openModal, closeModal } = useModal();
  const { isLoading } = useAppSelector((state) => state.user);
  const [isLoadingResetPassword, setIsLoadingResetPassword] = useState(false);

  const { data: allMyBooks, isLoading: isLoadingMyBooks } =
    useGetAllMyBooksQuery({
      userId: user?.id as string,
      from: 'mybooks',
      select: 'book_id, book_status',
    });

  // Группируем книги по статусам
  const bookStats = useMemo(() => {
    if (!allMyBooks) return { read: 0, reading: 0, will_read: 0, favorite: 0 };

    return allMyBooks.reduce(
      (acc, book) => {
        acc[book.book_status as keyof typeof acc]++;
        return acc;
      },
      { read: 0, reading: 0, will_read: 0, favorite: 0 },
    );
  }, [allMyBooks]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function getProfile() {
      if (user) {
        await dispatch(getUserProfile(user.id));
      }
    }
    getProfile();
  }, [user, dispatch]);

  const handleChangePassword = async () => {
    setIsLoadingResetPassword(true);
    if (user && user.email) {
      const { error } = await supabase.auth.resetPasswordForEmail(user.email, {
        redirectTo: 'http://localhost:8080/auth/reset-password',
      });

      if (error) {
        toast.error('Произошла ошибка при сбросе пароля');
      } else {
        navigate('/auth/verify-reset-password');
      }
    }
    setIsLoadingResetPassword(false);
  };

  return (
    <Container>
      {isLoadingResetPassword && (
        <FullScreenLoader
          text="Сброс пароля..."
          subText="Пожалуйста, подождите..."
        />
      )}
      <Toaster />
      <Content>
        <ProfileCard>
          <AvatarSection>
            <UserInfo>
              <UserName>
                {isLoading ? (
                  <SkeletonLoader
                    width="300px"
                    height="40px"
                  />
                ) : profile ? (
                  `${profile.lastname} ${profile.firstname} ${profile.patronymic}`
                ) : user ? (
                  user.email
                ) : (
                  'Пользователь'
                )}
              </UserName>
              <UserEmail>
                {isLoading ? (
                  <SkeletonLoader
                    width="300px"
                    height="40px"
                  />
                ) : user ? (
                  user.email
                ) : (
                  'Пользователь'
                )}
              </UserEmail>
              <UserStatus>
                <StatusDot />
                Активен
              </UserStatus>
            </UserInfo>
          </AvatarSection>

          <StatsSection>
            <StatCard>
              <StatNumber>
                {isLoadingMyBooks ? (
                  <SkeletonLoader
                    width="30px"
                    height="30px"
                  />
                ) : (
                  bookStats.read
                )}
              </StatNumber>
              <StatLabel>Прочитано книг</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>
                {isLoadingMyBooks ? (
                  <SkeletonLoader
                    width="30px"
                    height="30px"
                  />
                ) : (
                  bookStats.reading
                )}
              </StatNumber>
              <StatLabel>В процессе</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>
                {isLoadingMyBooks ? (
                  <SkeletonLoader
                    width="30px"
                    height="30px"
                  />
                ) : (
                  bookStats.favorite
                )}
              </StatNumber>
              <StatLabel>В избранном</StatLabel>
            </StatCard>
          </StatsSection>

          {isLoading ? (
            <SkeletonLoader
              width="100%"
              height="300px"
              margin="20px 0"
            />
          ) : (
            <DetailsSection>
              <SectionTitle>Информация о профиле</SectionTitle>
              <DetailsGrid>
                {profile && (
                  <>
                    <DetailItem>
                      <DetailLabel>Дата рождения</DetailLabel>
                      <DetailValue>{formatDate(profile.birthdate)}</DetailValue>
                    </DetailItem>
                    <DetailItem>
                      <DetailLabel>Пол</DetailLabel>
                      <DetailValue>
                        {profile.gender === 'male' ? 'Мужской' : 'Женский'}
                      </DetailValue>
                    </DetailItem>
                  </>
                )}
                <DetailItem>
                  <DetailLabel>Email</DetailLabel>
                  <DetailValue>{user?.email}</DetailValue>
                </DetailItem>
                <DetailItem>
                  <DetailLabel>Статус</DetailLabel>
                  <DetailValue>
                    <StatusBadge>Подтвержден</StatusBadge>
                  </DetailValue>
                </DetailItem>
                <DetailItem>
                  <DetailLabel>Дата регистрации</DetailLabel>
                  <DetailValue>
                    {user?.created_at
                      ? formatDate(user.created_at)
                      : 'Не указана'}
                  </DetailValue>
                </DetailItem>
                <DetailItem>
                  <DetailLabel>Последний вход</DetailLabel>
                  <DetailValue>
                    {user?.last_sign_in_at
                      ? formatDate(user.last_sign_in_at)
                      : 'Не указан'}
                  </DetailValue>
                </DetailItem>
              </DetailsGrid>
            </DetailsSection>
          )}
          <ActionsSection>
            <ActionButton
              onClick={openModal}
              primary
              disabled={isLoading}
            >
              <ButtonIcon>✏️</ButtonIcon>
              {profile ? 'Редактировать профиль' : 'Заполнить профиль'}
            </ActionButton>
            <ActionButton
              onClick={handleChangePassword}
              disabled={isLoading}
            >
              <ButtonIcon>🔒</ButtonIcon>
              Изменить пароль
            </ActionButton>
          </ActionsSection>
        </ProfileCard>
      </Content>
      {isModalOpen && <ProfileModal closeModal={closeModal} />}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100%;
  padding: 20px;
  overflow: hidden;
`;
const Content = styled.div`
  position: relative;
  z-index: 10;
  max-width: 800px;
  margin: 0 auto;
`;

const ProfileCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const AvatarSection = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
  padding-bottom: 30px;
  border-bottom: 2px solid var(--border-color);
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 10px 0;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.lg};
  }
`;

const UserEmail = styled.div`
  font-size: ${theme.fontSizes.md};
  color: var(--text-secondary);
  margin: 0 0 15px 0;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.sm};
  }
`;

const UserStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${theme.fontSizes.md};
  color: var(--success-color);
  font-weight: 500;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.sm};
  }
`;

const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  background: var(--success-color);
  border-radius: 50%;
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: 1fr;
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: ${theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10px;
  }
`;

const StatCard = styled.div`
  background: var(--gradient-gray);
  padding: 25px;
  border-radius: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 15px;
  }
`;

const StatNumber = styled.div`
  font-size: ${theme.fontSizes.xl};
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 8px;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.lg};
  }
`;

const StatLabel = styled.div`
  font-size: ${theme.fontSizes.md};
  color: var(--text-secondary);
  font-weight: 500;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.sm};
  }
`;

const DetailsSection = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes.lg};
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 25px 0;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--border-color);

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.md};
  }
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10px;
  }
`;

const DetailItem = styled.div`
  padding: 15px;
  background: var(--background-secondary);
  border-radius: 10px;
  border-left: 4px solid var(--primary-color);

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
  }
`;

const DetailLabel = styled.div`
  font-size: ${theme.fontSizes.md};
  color: var(--text-muted);
  font-weight: 500;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.sm};
  }
`;

const DetailValue = styled.div`
  font-size: ${theme.fontSizes.md};
  color: var(--text-primary);
  font-weight: 500;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.sm};
  }
`;

const StatusBadge = styled.span`
  background: var(--success-color);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ActionsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

const ActionButton = styled.button<{ primary?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${({ primary }) =>
    primary ? 'var(--gradient-primary)' : 'var(--background-secondary)'};
  color: ${({ primary }) => (primary ? 'white' : 'var(--text-primary)')};
  box-shadow: var(--shadow-sm);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  &:active {
    transform: translateY(0);
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

const ButtonIcon = styled.span`
  font-size: 1rem;
`;
