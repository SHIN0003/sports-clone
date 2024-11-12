import React from 'react';
import { ScrollView, useWindowDimensions } from 'react-native';
import { XStack, YStack, Text, Card, H4, Paragraph, Separator, Stack, ZStack } from 'tamagui';
import { ApiResponse } from '~/app/interfaces/ApiResponse';
// import { GamesProps } from '~/app/interfaces/games'; 
type GamesProps = {
  path: string;
  gamesData: ApiResponse | null;
};

export const Games = ({ path, gamesData }: GamesProps) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <ScrollView>
      <YStack space="$4" padding="$4" alignSelf="center" width="100%" maxWidth={isMobile ? "100%" : 800}>
        <H4 textAlign="center" fontSize={isMobile ? "$6" : "$8"}>Game Results</H4>
        {gamesData && gamesData.response.length > 0 ? (
          gamesData.response.map((game, index) => (
            <Card key={index} elevate size="$4" bordered>
              <Card.Header padded>
                <Paragraph size={isMobile ? "$2" : "$3"} color="$gray10">
                  {new Date(game.date.start).toLocaleDateString()}
                </Paragraph>
              </Card.Header>
              <Separator />
              <Card.Footer padded>
                <Stack
                  flexDirection={isMobile ? "column" : "row"}
                  justifyContent="space-between"
                  alignItems="center"
                  width="100%"
                  space={isMobile ? "$4" : "$2"}
                >
                  <TeamInfo
                    name={game.teams.home.name}
                    score={game.scores.home.points}
                    isWinner={game.scores.home.points > game.scores.visitors.points}
                    isMobile={isMobile}
                  />
                  <Text color="$gray10" fontWeight="bold" fontSize={isMobile ? "$4" : "$6"}>
                    vs
                  </Text>
                  <TeamInfo
                    name={game.teams.visitors.name}
                    score={game.scores.visitors.points}
                    isWinner={game.scores.visitors.points > game.scores.home.points}
                    isMobile={isMobile}
                  />
                </Stack>
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
  logo: type Image;
  score: number;
  isWinner: boolean;
  isMobile: boolean;
};

const TeamInfo = ({ name, score, logo, isWinner, isMobile }: TeamInfoProps) => (
  
  <YStack alignItems="center" space="$2" width={isMobile ? "100%" : "40%"}>
    <ZStack>
      
    </ZStack>
    <Text
      numberOfLines={2}
      textAlign="center"
      fontWeight="bold"
      fontSize={isMobile ? "$4" : "$5"}
      color={isWinner ? '$green10' : '$gray11'}
    >
      {name}
    </Text>
    <Text
      fontSize={isMobile ? "$7" : "$8"}
      fontWeight="bold"
      color={isWinner ? '$green10' : '$gray11'}
    >
      {score}
    </Text>
  </YStack>
);