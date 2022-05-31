import { CommonButton, Label, SelectedOption } from 'components/Header/SearchBar/searchBar.styled';

type ButtonInfo = {
  id: string;
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
  styleOptions: Style | undefined;
};

function InputButton({ clickModal, buttonInfo, styleOptions }: InputButtonType) {
  return (
    <CommonButton
      onClick={clickModal}
      aria-label={buttonInfo.ariaLabel}
      style={styleOptions}
      id={buttonInfo.id}
    >
      <Label>{buttonInfo.title}</Label>
      <SelectedOption>{buttonInfo.inputText}</SelectedOption>
    </CommonButton>
  );
}

export default InputButton;
