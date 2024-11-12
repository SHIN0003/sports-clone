import { YStack, H2, Separator, Theme } from 'tamagui';

import { EditScreenInfo } from './EditScreenInfo';
import { Games } from './Games';
import { ApiResponse } from '~/app/interfaces/ApiResponse';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
  gamesData: ApiResponse | null;
};

export const ScreenContent = ({ title, path, children, gamesData }: ScreenContentProps) => {
  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center">
        <H2>{title}</H2>
        <Separator />
        {/* <EditScreenInfo path={path} /> */}
        <Games path={path} gamesData={gamesData} />
        {children}
      </YStack>
    </Theme>
  );
};
