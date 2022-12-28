import * as React from "react";

import {
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export const AccordionSet = ({ title, children }) => (
  <AccordionItem>
    <h5>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h5>
    <AccordionPanel pb={4}>{children}</AccordionPanel>
  </AccordionItem>
);
