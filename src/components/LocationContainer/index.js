import {
  LocationListContainer,
  ImageContainer,
  HeadingDescriptionContainer,
  Heading,
  Paragraph,
} from './styledComponents'

const LocationContainer = props => {
  const {locationDetails} = props
  const {name, description, imageUrl} = locationDetails

  return (
    <LocationListContainer>
      <ImageContainer src={imageUrl} alt={name} />
      <HeadingDescriptionContainer>
        <Heading>{name}</Heading>
        <Paragraph>{description}</Paragraph>
      </HeadingDescriptionContainer>
    </LocationListContainer>
  )
}
export default LocationContainer
