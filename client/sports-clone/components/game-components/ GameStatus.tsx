import { XStack, Text } from 'tamagui'

type GameStatusProp = {
    finished: string;
    clock: string;
    halftime: boolean;
    period: number;
    endofperiod: boolean;
  };
  
export const GameStatus = ({ finished, clock, halftime, period, endofperiod }: GameStatusProp) => {
    let statusMessage = "";
  
    if (finished === "Finished") {
      statusMessage = "Game Over";
    } else if (halftime) {
      statusMessage = "Halftime";
    } else if (endofperiod) {
      statusMessage = `End of Period ${period}`;
    } else {
      statusMessage = `Period ${period} - Clock: ${clock}`;
    }
  
    return (
      <XStack alignItems="center" justifyContent="center" padding="$2">
        <Text fontSize="$3" color="$gray10">
          {statusMessage}
        </Text>
      </XStack>
    );
  };