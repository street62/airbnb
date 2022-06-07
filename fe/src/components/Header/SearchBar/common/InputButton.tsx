import { CommonButton, Label, SelectedOption } from 'components/Header/SearchBar/searchBar.styled';
import { makeDateString } from 'utils/util';
import { usePeriodState, usePeriodDispatch } from 'contexts/periodContext';

type ButtonInfo = {
  id: string | undefined;
  title: string;
  inputText: string;
  ariaLabel: string;
};

type Style = {
  [key: string]: number | string;
};

type InputButtonType = {
  clickModal: (e: React.MouseEvent<HTMLElement>) => void;
  buttonInfo: ButtonInfo;
  styleOptions?: Style;
};

function InputButton({ clickModal, buttonInfo, styleOptions }: InputButtonType) {
  const { checkIn, checkOut } = usePeriodState();
  const { setText } = usePeriodDispatch();
  const [checkInString, checkOutString] = [makeDateString(checkIn), makeDateString(checkOut)];
  const periodString = `${checkInString} ~ ${checkOutString}`;
  return (
    <CommonButton
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        clickModal(e);
        setText(periodString);
      }}
      aria-label={buttonInfo.ariaLabel}
      style={styleOptions}
      data-id={buttonInfo.id}
    >
      <Label>{buttonInfo.title}</Label>
      <SelectedOption>{buttonInfo.inputText}</SelectedOption>
    </CommonButton>
  );
}

InputButton.defaultProps = {
  styleOptions: undefined,
};

export default InputButton;
