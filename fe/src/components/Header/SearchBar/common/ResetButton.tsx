import { StyledCrossIcon } from 'components/Header/SearchBar/searchBar.styled';

type Props = {
  ariaLabel: string;
  // eslint-disable-next-line react/require-default-props
  onClickEvent?: (e: React.MouseEvent<HTMLElement>) => void;
};

function ResetButton({ ariaLabel, onClickEvent }: Props) {
  return (
    <button type="button" aria-label={ariaLabel} onClick={onClickEvent}>
      <StyledCrossIcon />
    </button>
  );
}

export default ResetButton;
