import React, { useContext, useState } from 'react';

import Button, { BUTTON_SIZE } from '@components/atoms/Button';
import DisplayBox, { DISPLAY_BOX_SIZE } from '@components/atoms/DisplayBox';
import InputBox, { NO_BALANCE } from '@components/atoms/InputBox';
import LogBox from '@components/molecules/LogBox';
import SelectForm from '@components/molecules/SelectForm';
import * as S from '@components/organisms/VendingMachineInfo/VendingMachineInfo.style';
import { MoneyContext } from '@context/money/provider';
import logs from '@data/logs';

const VendingMachineInfo = () => {
  const { state, options, changeMoneyQuantity } = useContext(MoneyContext);

  const [inputValue, setInputValue] = useState(NO_BALANCE);

  return (
    state && (
      <S.Container>
        <DisplayBox
          size={DISPLAY_BOX_SIZE.MEDIUM}
          title='총 투입 금액'
          content={`${state.insertedMoney}원`}
        />
        <InputBox inputValue={inputValue} setInputValue={setInputValue} />
        <SelectForm options={options} onClick={changeMoneyQuantity} />
        <Button size={BUTTON_SIZE.X_LARGE}>반환</Button>
        <LogBox logs={logs} />
      </S.Container>
    )
  );
};

export default VendingMachineInfo;
