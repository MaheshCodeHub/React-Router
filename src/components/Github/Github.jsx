import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();


   // const [data, setData] = useState({});
  // useEffect(() => {
  //   fetch('https://api.github.com/users/MaheshCodeHub')
  //     .then(response => response.json())
  //     .then(userData => {
  //       console.log(userData);
  //       setData(userData);

  //       // Fetch user repositories
  //       fetch(`https://api.github.com/users/MaheshCodeHub/repos`)
  //         .then(response => response.json())
  //         .then(reposData => {
  //           console.log(reposData);
  //           setData(prevData => ({ ...prevData, repositories: reposData }));
  //         })
  //         .catch(error => console.error("Error fetching repositories:", error));
  //     })
  //     .catch(error => console.error("Error fetching user data:", error));
  // }, []);

  return (
    <div className='text-center m-4 bg-gray-800 text-white p-8 rounded-lg shadow-md'>
      <img src={data.avatar_url} alt="git pic" className="rounded-full mx-auto mb-4" width={150} />

      <h1 className="text-4xl font-bold mb-2">{data.login}</h1>
      <p className="text-xl mb-4">Followers: {data.followers}</p>

      <h2 className="text-2xl mb-2">Repositories:</h2>
      <ul className="list-disc pl-4 flex gap-7 justify-center">
        {data.repositories && data.repositories.map(repo => (
          <li key={repo.id} className="text-lg">{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export const githubInfoLoader = async () => {
  const userResponse = await fetch('https://api.github.com/users/MaheshCodeHub');
  const userData = await userResponse.json();

  const repoResponse = await fetch('https://api.github.com/users/MaheshCodeHub/repos');
  const repoData = await repoResponse.json();

  return { ...userData, repositories: repoData };
};

export default Github;
