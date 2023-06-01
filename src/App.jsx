import { useState } from 'react';
import { useEffect } from 'react';
import Loading from './Loading';
import JobInfo from './JobInfo';
import BtnContainer from './BtnContainer';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [jobs, setJobs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="jobs-center">
      <BtnContainer jobs={jobs} setCurrentItem={setCurrentItem} currentItem={currentItem} />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
