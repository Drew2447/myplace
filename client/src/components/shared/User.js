import useAxiosOnMount from "../../hooks/useAxiosOnMount";

const Users = () => {
  const { data, loading, error } = useAxiosOnMount("/api/my_users");
  
  if (error) return <p>Error occured</p>;
  if (loading) return <p>Loading</p>;
  return (
    <div>
      <h1>My Users</h1> 
      {data.map((user) => {
        return (
          <div key={user.id} style={{ border: "2px solid", width: "200px" }}>
            <img width={100} height={100} src={user.avatar} />
            <section>
              <h1>{user.name}</h1>
              <p>{user.gender}</p>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default Users;