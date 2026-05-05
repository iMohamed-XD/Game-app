import { Badge } from '@chakra-ui/react/badge';

interface Props {
    metacritic: number;
}

const Metacritic = ({ metacritic }: Props) => {
  return (
    <>
        {metacritic >= 90 && (
            <Badge colorPalette={'green'} variant="outline">{metacritic}</Badge>
        )}
        {metacritic >= 80 && metacritic < 90 && (
            <Badge colorPalette={'yellow'} variant="outline">{metacritic}</Badge>
        )}
        {metacritic < 80 && (
            <Badge colorPalette={'red'} variant="outline">{metacritic}</Badge>
        )}
    </>
  )
}

export default Metacritic
