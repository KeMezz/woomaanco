import Layout from "@components/layout";

const Profile = () => {
  return (
    <Layout title="프로필">
      <div className="flex flex-col justify-center items-center px-4 py-8 bg-white m-4 rounded-lg shadow-sm">
        <div className="w-32 h-32 bg-gray-200 rounded-full" />
        <div className="flex flex-col justify-center items-center pt-4">
          <h3 className="font-semibold text-lg">정형진</h3>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
