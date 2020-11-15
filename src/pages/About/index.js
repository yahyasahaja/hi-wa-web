import texts from 'texts';

const About = () => {
  return (
    <div className="p-10" >
      <h1 className="font-bold mb-5 ">About</h1>

      <div className="text-center">
        <div className="flex justify-center mb-5">
          <img src="/assets/about.png" alt="about" />
        </div>

        <div>
          {texts.about}
        </div>
      </div>
    </div>
  )
};

export default About;