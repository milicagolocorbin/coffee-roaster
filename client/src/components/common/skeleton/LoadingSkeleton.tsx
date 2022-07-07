import { Box, Skeleton, SkeletonCircle } from "@chakra-ui/react";

// MARKUP
const LoadingSkeleton = () => {
  return (
    <>
      <Box padding="4" boxShadow="lg" w="80%">
        <SkeletonCircle height="45px" width="45px" />
        <Skeleton height="15px" my="10px" w="100%" />
        <Skeleton height="15px" my="10px" w="100%" />
        <Skeleton height="15px" my="10px" w="80%" />
        <Skeleton height="15px" my="10px" w="70%" />
      </Box>
      <Box padding="4" boxShadow="lg" w="80%">
        <SkeletonCircle height="45px" width="45px" />
        <Skeleton height="15px" my="10px" w="100%" />
        <Skeleton height="15px" my="10px" w="100%" />
        <Skeleton height="15px" my="10px" w="80%" />
        <Skeleton height="15px" my="10px" w="70%" />
      </Box>
    </>
  );
};
export default LoadingSkeleton;
