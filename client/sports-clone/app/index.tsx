import { Stack, Link } from 'expo-router';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import { ScrollView, Platform, ActivityIndicator } from 'react-native'
import { GamesProps } from './interfaces/games';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../tamagui.config';
import { TamaguiProvider, Text, Image } from 'tamagui';
import { ApiResponse } from './interfaces/ApiResponse';

export default function Home() {
  const [json, setJson] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const baseURL =
    Platform.OS === 'web'
      ? 'http://localhost:3000'
      : 'http://172.31.71.233:3000';

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(`${baseURL}/gameid`);
        setJson(response.data);
        console.log(json)
      } catch (error) {
        console.error('Error fetching live games:', error);
      } finally {
        setLoading(false)
      }
    };

    fetchGames();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />;
  }
  
  if (!json || json.response.length === 0) {
    return (
      <TamaguiProvider config={config}>
        <Stack>
          <Text>No live games available</Text>
        </Stack>
      </TamaguiProvider>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <ScrollView>
          <ScreenContent path="app/index.tsx" title="Home" gamesData={json} />
          <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
            <Button title="Show Details" alignSelf='center' />
          </Link>
        </ScrollView>
      </Container>
    </>
  );
}
