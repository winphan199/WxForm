import Input from '~/components/UI/Input';

function Home() {
  return (
    <div>
      <form method="POST">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Hung Phan" />
          <p>err</p>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <div>
            <input type="radio" name="age" id="<18" value="<18" />
            <label htmlFor="<18>">&lt;18</label>
            <input type="radio" name="age" id="19-35" value="19-35" />
            <label htmlFor="19-35>">19-35</label>
            <input type="radio" name="age" id="36-48" value="36-48" />
            <label htmlFor="36-48">36-48</label>
            <input type="radio" name="age" id=">49" value=">49" />
            <label htmlFor=">49">&gt;49</label>
          </div>
          <p>err</p>
        </div>
        <div>
          <label htmlFor="profession">Profession</label>
          <input type="text" name="profession" id="profession" placeholder="software engineer" />
          <p>err</p>
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <select name="country" id="country">
            <option value="vietnam">Viet Nam</option>
            <option value="finland">Finland</option>
            <option value="india">India</option>
          </select>
          <p>err</p>
        </div>
        <div>
          <label htmlFor="interests">Interests</label>
          <select name="interests" id="interests" multiple>
            <option value="sports">Sports</option>
            <option value="travel">Travel</option>
            <option value="music">Music</option>
          </select>
          <p>err</p>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} cols={100} maxLength={2000} />
        </div>
        <input type="submit" value={'submit'} />
      </form>
    </div>
  );
}

export default Home;
