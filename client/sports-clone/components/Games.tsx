import React from 'react';
import { ScrollView, useWindowDimensions } from 'react-native';
import { XStack, YStack, Text, Card, H4, Paragraph, Separator, Image } from 'tamagui';
import { ApiResponse } from '~/app/interfaces/ApiResponse';
import { GameStatus } from './game-components/ GameStatus';
import { VisitorTeamInfo } from './game-components/VisitorTeam';
import { HomeTeamInfo } from './game-components/HomeTeam'

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
            <Card key={index} elevate size="$2" bordered width="100%" animation="bouncy" hoverStyle={{ scale: 0.925 }} pressStyle={{ scale: 0.875 }}>
              <Card.Header padded>
                  <XStack justifyContent="space-between" width="100%">
                    <Paragraph size={isMobile ? "$2" : "$3"} color="$gray10">
                      {new Date(game.date.start).toLocaleDateString()}
                    </Paragraph>
                    <GameStatus
                      finished={game.status.long}
                      clock={game.status.clock}
                      halftime={game.status.halftime}
                      period={game.periods.current}
                      endofperiod={game.periods.endOfPeriod}
                    >
                    </GameStatus>
                </XStack>
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

