import React from 'react';
import { XStack, YStack, H4, Paragraph, ListItem, Separator, YGroup } from 'tamagui';
import { ApiResponse } from '~/app/interfaces/ApiResponse';
import { View, Text } from 'react-native';

type GamesProps = {
  path: string;
  gamesData: ApiResponse | null;
};

export const Games = ({ path, gamesData }: GamesProps) => {
  return (
    <YGroup
      alignSelf="center"
      bordered
      width={600}
      size="$5"
      separator={<Separator />}
    >
      {gamesData && gamesData.response.length > 0 ? (
        gamesData.response.map((game, index) => (
          <YGroup.Item key={index}>
            <ListItem padding="$4">
              <XStack justifyContent="space-between" alignItems="stretch">
                
                {/* Team A */}
                <YStack alignItems="flex-start">
                  <H4>{game.teams.home.name}</H4>
                  <Paragraph>Score: {game.scores.home.points}</Paragraph>
                </YStack>

                {/* "vs" separator */}
                <Text>vs</Text>

                {/* Team B */}
                <YStack alignItems="flex-end">
                  <H4>{game.teams.visitors.name}</H4>
                  <Paragraph>Score: {game.scores.visitors.points}</Paragraph>
                </YStack>

              </XStack>
            </ListItem>
          </YGroup.Item>
        ))
      ) : (
        <Text>No game data available</Text>
      )}
    </YGroup>
  );
};
