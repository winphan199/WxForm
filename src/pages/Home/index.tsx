import { useEffect, useState } from 'react';

import Input from '~/components/UI/Input';
import Select from '~/components/UI/Select';
import Textarea from '~/components/UI/Textarea';

const RADIOLIST = [
  {
    id: '<18',
    value: '<18',
    label: '<18',
  },
  {
    id: '19-35',
    value: '19-35',
    label: '19-35',
  },
  {
    id: '36-48',
    value: '36-48',
    label: '36-48',
  },
  {
    id: '>49',
    value: '>49',
    label: '>49',
  },
];

const COUNTRYLIST = [
  {
    label: 'Viet Nam',
    value: 'vietnam',
  },
  {
    label: 'Finland',
    value: 'finland',
  },
  {
    label: 'India',
    value: 'india',
  },
];

const INTERESTLIST = [
  {
    label: 'Sports',
    value: 'sports',
  },
  {
    label: 'Travel',
    value: 'travel',
  },
  {
    label: 'Music',
    value: 'music',
  },
];

function Home() {
  const [name, setName] = useState({ inputValue: '', isValid: false });
  const [age, setAge] = useState({ inputValue: '', isValid: false });
  const [profession, setProfession] = useState({ inputValue: '', isValid: false });
  const [country, setCountry] = useState<{ inputValue: string | string[]; isValid: boolean }>({
    inputValue: '',
    isValid: false,
  });
  const [interests, setInterests] = useState<{ inputValue: string | string[]; isValid: boolean }>({
    inputValue: ['sports', 'music'],
    isValid: false,
  });
  const [message, setMessage] = useState({ inputValue: '', isValid: false });

  useEffect(() => {
    console.log(message.inputValue);
  }, [message.inputValue]);

  return (
    <div>
      <form method="POST">
        <Input type="text" label="Name" name="name" placeholder="Your full name..." state={name} setState={setName} />
        <Input type="radio" label="Age" name="age" radioList={RADIOLIST} state={age} setState={setAge} />
        <Input
          type="text"
          label="Profession"
          name="profession"
          placeholder="e.g. Software Engineer"
          state={profession}
          setState={setProfession}
        />
        <Select label="Country" name="country" optionList={COUNTRYLIST} state={country} setState={setCountry} />
        <Select
          label="Interests"
          name="interests"
          optionList={INTERESTLIST}
          multiple
          state={interests}
          setState={setInterests}
        />
        <Textarea label="Message" name="message" maxLength={2000} state={message} setState={setMessage} />
        <input type="submit" value={'submit'} />
      </form>
    </div>
  );
}

export default Home;
