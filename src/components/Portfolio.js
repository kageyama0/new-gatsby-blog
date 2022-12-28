import React from "react";
import { FaCalendarDay, FaTags } from "react-icons/fa";

import { Box, Flex } from "@chakra-ui/react";

export const PortfolioCard = ({
  title,
  start,
  end,
  technologies,
  description,
}) => {
  return (
    <Box margin={{ base: "1rem", md: "3rem" }}>
      <Box fontSize="2xl">{title}</Box>
      <Flex marginTop="1rem">
        <FaCalendarDay color="#35858B" fontSize="20px" />
        <Box marginLeft="0.5rem">
          {start} ~ {end}
        </Box>
      </Flex>
      <Flex>
        <FaTags color="gray" fontSize="20px" />
        <Flex>
          {technologies.map((technology, index) => {
            return (
              <Box key={index} marginLeft="0.5rem">
                {technology}
              </Box>
            );
          })}
        </Flex>
      </Flex>

      <Box lineHeight="2rem" whiteSpace="pre-wrap">
        {description}
      </Box>
    </Box>
  );
};
