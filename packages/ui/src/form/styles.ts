import { spacing, styled } from '../../stitches.config';

export const StyledForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  paddingTop: spacing(11),
  paddingBottom: spacing(20),
  paddingInline: spacing(12),

  border: '1px solid',
  borderColor: '$stroke',

  backgroundColor: '$black600',
});
