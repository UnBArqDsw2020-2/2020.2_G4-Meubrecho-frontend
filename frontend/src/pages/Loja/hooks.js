import { useCallback, useMemo, useState } from 'react';

import * as Consts from './consts';

export default function useSelected() {
  const [superior, setSuperior] = useState(false);
  const [inferior, setInferior] = useState(false);
  const [camisa, setCamisa] = useState(false);
  const [camiseta, setCamiseta] = useState(false);
  const [agasalho, setAgasalho] = useState(false);
  const [calca, setCalca] = useState(false);
  const [short, setShort] = useState(false);
  const [saia, setSaia] = useState(false);
  const [tenis, setTenis] = useState(false);
  const [sandalia, setSandalia] = useState(false);
  const [bota, setBota] = useState(false);
  const [salto, setSalto] = useState(false);
  const [bone, setBone] = useState(false);
  const [chapeu, setChapeu] = useState(false);
  const toggle = useCallback(label => {
    console.log('teste', label);
    switch (label) {
      case Consts.CHANGE_SUPERIOR:
        setSuperior(prevExpanded => !prevExpanded);
        break;
      case Consts.CHANGE_INFERIOR:
        setInferior(prevExpanded => !prevExpanded);
        break;
      case Consts.CHANGE_CAMISA:
        setCamisa(prevExpanded => !prevExpanded);
        break;
      case Consts.CHANGE_CAMISETA:
        setCamiseta(prevExpanded => !prevExpanded);
        break;
      case Consts.CHANGE_AGASALHO:
        setAgasalho(prevExpanded => !prevExpanded);
        break;
      case Consts.CHANGE_CALCA:
        setCalca(prevExpanded => !prevExpanded);
        break;
      case Consts.CHANGE_SHORT:
        setShort(prevExpanded => !prevExpanded);
        break;
      case Consts.CHANGE_SAIA:
        setSaia(prevExpanded => !prevExpanded);
        break;
      case Consts.CHANGE_TENIS:
        setTenis(prevExpanded => !prevExpanded);
        break;
      case Consts.CHANGE_SANDALIA:
        setSandalia(prevExpanded => !prevExpanded);
        break;
      case Consts.CHANGE_BOTA:
        setBota(prevExpanded => !prevExpanded);
        break;
      case Consts.CHANGE_SALTO:
        setSalto(prevExpanded => !prevExpanded);
        break;
      case Consts.CHANGE_BONE:
        setBone(prevExpanded => !prevExpanded);
        break;
      case Consts.CHANGE_CHAPEU:
        setChapeu(prevExpanded => !prevExpanded);
        break;
    }
  }, []);

  const value = useMemo(
    () => ({
      chapeu,
      bone,
      salto,
      bota,
      sandalia,
      tenis,
      saia,
      short,
      calca,
      agasalho,
      camiseta,
      camisa,
      inferior,
      superior,
      toggle
    }),
    [
      chapeu,
      bone,
      salto,
      bota,
      sandalia,
      tenis,
      saia,
      short,
      calca,
      agasalho,
      camiseta,
      camisa,
      inferior,
      superior,
      toggle
    ]
  );

  return value;
}
