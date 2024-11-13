import { Image, Text, YStack, XStack } from 'tamagui'

type TeamInfoProps = {
    name: string;
    score: number;
    logo: string;
    isWinner: boolean;
    isMobile: boolean;
  };


export const VisitorTeamInfo = ({ name, score, logo, isWinner, isMobile }: TeamInfoProps) => (
    <XStack alignItems="center" space="$2" width={isMobile ? "45%" : "40%"} justifyContent="flex-end">
      <Image
        source={{ uri: logo }}
        width={isMobile ? 40 : 50}
        height={isMobile ? 40 : 50}
        resizeMode="contain"
      />
      <YStack alignItems="flex-end" flex={1}>
        <Text
          numberOfLines={2}
          fontWeight="bold"
          fontSize={isMobile ? "$3" : "$4"}
          color={isWinner ? '$green10' : '$gray11'}
          textAlign="right"
        >
          {name}
        </Text>
        <Text
          fontSize={isMobile ? "$6" : "$7"}
          fontWeight="bold"
          color={isWinner ? '$green10' : '$gray11'}
        >
          {score}
        </Text>
      </YStack>
    </XStack>
  );