import React from 'react';
import { ScrollView, useWindowDimensions } from 'react-native';
import { XStack, YStack, Text, Card, H4, Paragraph, Separator, Image } from 'tamagui';
import { ApiResponse } from '~/app/interfaces/ApiResponse';

type GamesProps = {
  path: string;
  gamesData: ApiResponse | null;
};

export const Games = ({ path, gamesData }: GamesProps) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <ScrollView>
      <YStack space="$4" padding="$4" alignSelf="center" width="100%" maxWidth={isMobile ? "100%" : 1000}>
        <H4 textAlign="center" fontSize={isMobile ? "$6" : "$8"}>Game Results</H4>
        {gamesData && gamesData.response.length > 0 ? (
          gamesData.response.map((game, index) => (
            <Card key={index} elevate size="$4" bordered width="100%">
              <Card.Header padded>
                <Paragraph size={isMobile ? "$2" : "$3"} color="$gray10">
                  {new Date(game.date.start).toLocaleDateString()}
                </Paragraph>
              </Card.Header>
              <Separator />
              <Card.Footer padded>
                <XStack justifyContent="space-between" alignItems="center" width="100%">
                  <HomeTeamInfo
                    name={game.teams.home.name}
                    score={game.scores.home.points}
                    logo={game.teams.home.logo}
                    isWinner={game.scores.home.points > game.scores.visitors.points}
                    isMobile={isMobile}
                  />
                  <Text color="$gray10" fontWeight="bold" fontSize={isMobile ? "$4" : "$6"}>
                    vs
                  </Text>
                  <VisitorTeamInfo
                    name={game.teams.visitors.name}
                    score={game.scores.visitors.points}
                    logo={game.teams.visitors.logo}
                    isWinner={game.scores.visitors.points > game.scores.home.points}
                    isMobile={isMobile}
                  />
                </XStack>
              </Card.Footer>
            </Card>
          ))
        ) : (
          <Card padding="$4">
            <Text textAlign="center">No game data available</Text>
          </Card>
        )}
      </YStack>
    </ScrollView>
  );
};

type TeamInfoProps = {
  name: string;
  score: number;
  logo: string;
  isWinner: boolean;
  isMobile: boolean;
};

const HomeTeamInfo = ({ name, score, logo, isWinner, isMobile }: TeamInfoProps) => (
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
        fontSize={isMobile ? "$6" : "$7"}
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

const VisitorTeamInfo = ({ name, score, logo, isWinner, isMobile }: TeamInfoProps) => (
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