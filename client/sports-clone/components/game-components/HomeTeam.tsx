import { Image, Text, YStack, XStack } from 'tamagui'

type TeamInfoProps = {
    name: string;
    score: number;
    logo: string;
    isWinner: boolean;
    isMobile: boolean;
  };
  
export const HomeTeamInfo = ({ name, score, logo, isWinner, isMobile }: TeamInfoProps) => (
    <XStack alignItems="center" space="$2" width={isMobile ? "45%" : "40%"}>
      <YStack alignItems="flex-start" flex={1}>
        <Text
          numberOfLines={2}
          fontWeight="bold"
          fontSize={isMobile ? "$3" : "$4"}
          color={isWinner ? '$green10' : '$gray11'}
        >
          {name}
        </Text>
        <Text
          fontSize={isMobile ? "$3" : "$7"}
          fontWeight="bold"
          color={isWinner ? '$green10' : '$gray11'}
        >
          {score}
        </Text>
      </YStack>
      <Image
        source={{ uri: logo }}
        width={isMobile ? 40 : 50}
        height={isMobile ? 40 : 50}
        resizeMode="contain"
      />
    </XStack>
  );