import { useGetAllMyBooksQuery } from "entities/book";
import { getUserProfile } from "entities/user";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  formatDate,
  st,
  supabase,
  useAppDispatch,
  useAppSelector,
  useModal,
} from "shared/lib";
import { FullScreenLoader, SkeletonLoader } from "shared/ui";
import { styled } from "styled-components";

import { ROUTES } from "app/routes/router";
import { ProfileModal } from "./ProfileModal";

export const ProfilePage = () => {
  const { user, profile, isLoading } = useAppSelector((state) => state.user);
  const { isModalOpen, openModal, closeModal } = useModal();
  const [isLoadingResetPassword, setIsLoadingResetPassword] = useState(false);

  const { data: allMyBooks, isLoading: isLoadingMyBooks } =
    useGetAllMyBooksQuery({
      userId: user?.id as string,
      from: "mybooks",
      select: "book_id, book_status",
    });

  const bookStats = useMemo(() => {
    if (!allMyBooks) return { read: 0, reading: 0, will_read: 0, favorite: 0 };

    return allMyBooks.reduce(
      (acc, book) => {
        acc[book.book_status as keyof typeof acc]++;
        return acc;
      },
      { read: 0, reading: 0, will_read: 0, favorite: 0 }
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
        redirectTo: `${process.env.REACT_APP_BASE_URL}/auth/reset-password`,
      });

      if (error) {
        toast.error("Произошла ошибка при сбросе пароля");
      } else {
        navigate(ROUTES.LINKS.VERIFY_RESET_PASSWORD);
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

      <Content>
        <ProfileCard>
          <AvatarSection>
            <UserInfo>
              <UserName>
                {isLoading ? (
                  <SkeletonLoader width="300px" height="40px" />
                ) : profile ? (
                  `${profile.lastname} ${profile.firstname} ${profile.patronymic}`
                ) : user ? (
                  user.email
                ) : (
                  "Пользователь"
                )}
              </UserName>
              <UserEmail>
                {isLoading ? (
                  <SkeletonLoader width="300px" height="40px" />
                ) : user ? (
                  user.email
                ) : (
                  "Пользователь"
                )}
              </UserEmail>
            </UserInfo>
          </AvatarSection>

          <StatsSection>
            <StatCard>
              <StatNumber>
                {isLoadingMyBooks ? (
                  <SkeletonLoader width="30px" height="30px" />
                ) : (
                  bookStats.read
                )}
              </StatNumber>
              <StatLabel>Прочитано книг</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>
                {isLoadingMyBooks ? (
                  <SkeletonLoader width="30px" height="30px" />
                ) : (
                  bookStats.reading
                )}
              </StatNumber>
              <StatLabel>В процессе</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>
                {isLoadingMyBooks ? (
                  <SkeletonLoader width="30px" height="30px" />
                ) : (
                  bookStats.favorite
                )}
              </StatNumber>
              <StatLabel>В избранном</StatLabel>
            </StatCard>
          </StatsSection>

          {isLoading ? (
            <SkeletonLoader width="100%" height="300px" margin="20px 0" />
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
                        {profile.gender === "male" ? "Мужской" : "Женский"}
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
                      : "Не указана"}
                  </DetailValue>
                </DetailItem>
                <DetailItem>
                  <DetailLabel>Последний вход</DetailLabel>
                  <DetailValue>
                    {user?.last_sign_in_at
                      ? formatDate(user.last_sign_in_at)
                      : "Не указан"}
                  </DetailValue>
                </DetailItem>
              </DetailsGrid>
            </DetailsSection>
          )}
          <ActionsSection>
            <ActionButton onClick={openModal} primary disabled={isLoading}>
              <ButtonIcon>✏️</ButtonIcon>
              {profile ? "Редактировать профиль" : "Заполнить профиль"}
            </ActionButton>
            <ActionButton onClick={handleChangePassword} disabled={isLoading}>
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
`;
const Content = styled.div`
  position: relative;
  z-index: ${st("zIndices", "base")};
  max-width: 800px;
  margin: 0 auto;
`;

const ProfileCard = styled.div`
  background: ${st("colors", "background")};
  backdrop-filter: blur(10px);
  border-radius: ${st("borderRadius", "xl")};
  padding: 40px;
  box-shadow: ${st("shadows", "card")};
  transition: ${st("transitions", "colors")};
`;

const AvatarSection = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
  padding-bottom: 30px;
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.h1`
  font-size: ${st("fontSizes", "xl")};
  font-weight: 700;
  margin: 0 0 10px 0;
  color: ${st("colors", "primaryLight")};

  @media (max-width: ${st("breakpoints", "md")}) {
    font-size: ${st("fontSizes", "lg")};
  }
`;

const UserEmail = styled.div`
  font-size: ${st("fontSizes", "md")};
  color: ${st("colors", "textSecondary")};
  margin: 0 0 15px 0;

  @media (max-width: ${st("breakpoints", "md")}) {
    font-size: ${st("fontSizes", "sm")};
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: 1fr;
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: ${st("breakpoints", "sm")}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10px;
  }
`;

const StatCard = styled.div`
  background: ${st("colors", "backgroundSecondary")};
  color: ${st("colors", "textPrimary")};
  padding: 25px;
  border-radius: ${st("borderRadius", "lg")};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: ${st("transitions", "transform")};
  box-shadow: ${st("shadows", "card")};

  @media (max-width: ${st("breakpoints", "md")}) {
    padding: 15px;
  }
`;

const StatNumber = styled.div`
  font-size: ${st("fontSizes", "xl")};
  font-weight: 700;
  margin-bottom: 8px;
  color: ${st("colors", "accent")};

  @media (max-width: ${st("breakpoints", "md")}) {
    font-size: ${st("fontSizes", "lg")};
  }
`;

const StatLabel = styled.div`
  font-size: ${st("fontSizes", "md")};
  font-weight: 500;

  @media (max-width: ${st("breakpoints", "md")}) {
    font-size: ${st("fontSizes", "sm")};
  }
`;

const DetailsSection = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: ${st("fontSizes", "lg")};
  font-weight: 600;
  color: ${st("colors", "textPrimary")};
  margin: 0 0 25px 0;
  padding-bottom: 10px;
  @media (max-width: ${st("breakpoints", "md")}) {
    font-size: ${st("fontSizes", "md")};
  }
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  @media (max-width: ${st("breakpoints", "sm")}) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }

  @media (max-width: ${st("breakpoints", "sm")}) {
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
  background: ${st("colors", "backgroundSecondary")};
  border-radius: ${st("borderRadius", "md")};
  border-left: 4px solid ${st("colors", "primary")};
  transition: ${st("transitions", "colors")};

  @media (max-width: ${st("breakpoints", "sm")}) {
    width: 100%;
  }
`;

const DetailLabel = styled.div`
  font-size: ${st("fontSizes", "md")};
  color: ${st("colors", "textMuted")};
  font-weight: 500;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: ${st("breakpoints", "md")}) {
    font-size: ${st("fontSizes", "sm")};
  }
`;

const DetailValue = styled.div`
  font-size: ${st("fontSizes", "md")};
  color: ${st("colors", "textPrimary")};
  font-weight: 500;

  @media (max-width: ${st("breakpoints", "md")}) {
    font-size: ${st("fontSizes", "sm")};
  }
`;

const StatusBadge = styled.span`
  background: ${st("colors", "success")};
  color: ${st("colors", "textWhite")};
  padding: 4px 12px;
  border-radius: ${st("borderRadius", "full")};
  font-size: ${st("fontSizes", "sm")};
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
  padding: 12px 20px;
  border: none;
  border-radius: ${st("borderRadius", "full")};
  font-size: ${st("fontSizes", "sm")};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({ primary }) =>
    primary ? st("gradients", "primary") : st("colors", "backgroundSecondary")};
  color: ${({ primary }) =>
    primary ? st("colors", "textWhite") : st("colors", "textPrimary")};
  box-shadow: ${st("shadows", "card")};
  white-space: nowrap;
  min-width: fit-content;

  @media (max-width: ${st("breakpoints", "sm")}) {
    font-size: ${st("fontSizes", "xs")};
    padding: 10px 16px;
    gap: 8px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${st("shadows", "hoverLift")};
  }

  &:active {
    transform: translateY(0);
  }

  :disabled {
    opacity: ${st("opacity", "disabled")};
    cursor: not-allowed;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

const ButtonIcon = styled.span`
  font-size: ${st("fontSizes", "sm")};
  flex-shrink: 0;

  @media (max-width: ${st("breakpoints", "sm")}) {
    font-size: ${st("fontSizes", "xs")};
  }
`;
