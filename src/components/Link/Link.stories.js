import { Link } from 'components/Link';
import { StoryContainer } from '../../../.storybook/StoryContainer';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://ganatejadragneel.github.io/">Primary link</Link>
    <Link secondary href="https://ganatejadragneel.github.io/">
      Secondary link
    </Link>
  </StoryContainer>
);
