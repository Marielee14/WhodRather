import { Box, Text, Flex } from "@chakra-ui/react";
import AnimalCards from "./AnimalCards";
import { useState } from "react";
import { useEffect } from "react";

const babyAnimals = [
  "골든리트리버",
  "라가머핀",
  "말티즈",
  "먼치킨",
  "백호",
  "스코티쉬폴드",
  "시고르자브종",
  "시바",
  "시츄",
  "아메리칸숏헤어",
  "진돗개",
  "집토끼",
  "터키쉬앙고라",
  "페르시안",
  "포메라니안",
  "푸들",
];

babyAnimals.sort(() => Math.random() - 0.5);
console.log(babyAnimals);

const WhodRather = () => {
  const [round, setRound] = useState(babyAnimals);
  const [nextRound, setNextRound] = useState([]);
  const [choice, setChoice] = useState(0);
  const [end, setEnd] = useState(16);

  const onClickChoice = (winAnimal) => () => {
    setNextRound([...nextRound, winAnimal]);
    setChoice(choice + 2);
  };
  useEffect(() => console.log(nextRound, [nextRound]));
  useEffect(() => {
    if (end === choice) {
      setRound(nextRound);
      setNextRound([]);
      setEnd(end / 2);
      setChoice(0);
    }
  }, [choice]);

  return end === 1 ? (
    <Flex
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      <Text fontSize="4xl" mb={8}>
        🎉🎉🎉Conglaturations🎉🎉🎉
      </Text>
      <AnimalCards type={round[choice]} />
    </Flex>
  ) : (
    <Flex minH="100vh" justifyContent="center" alignItems="center">
      <Box onClick={onClickChoice(round[choice])}>
        <AnimalCards type={round[choice]} />
      </Box>
      <Text mx={8} fontSize="4xl">
        VS
      </Text>
      <Box onClick={onClickChoice(round[choice + 1])}>
        <AnimalCards type={round[choice + 1]} />
      </Box>
    </Flex>
  );
};

export default WhodRather;
