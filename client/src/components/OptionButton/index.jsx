import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {useCallback, useState} from "react";
import {Background, SelectWrapper} from "./styles";

const OptionButton = ({ title, data, setState }) => {
  const [select, setSelect] = useState('');
  const [showList, setShowList] = useState(false);

  const onClickShowList = useCallback(() => {
    setShowList((prev) => !prev);
  }, []);

  return (
    <Background>
      <button type="button" onClick={onClickShowList}>
        <p>{ select || title }</p>
        <KeyboardArrowDownIcon />
      </button>
      {
        showList && (
          <SelectWrapper>
            {
              data.map((list, i) => {
                return (
                  <button
                    type="button"
                    key={list.code}
                    onClick={() => {
                      setState(list.code);
                      setSelect(list.name);
                      setShowList(false);
                    }}
                  >
                    { list.name }
                  </button>
                );
              })
            }
          </SelectWrapper>
        )
      }
    </Background>
  );
};

export default OptionButton;
