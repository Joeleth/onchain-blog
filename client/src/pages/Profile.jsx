

function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-16">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">
          profile
        </h2>
        <form className="space-y-4">
          <img
            className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2 mb-3"
            src="https://i2.seadn.io/base/0x7e72abdf47bd21bf0ed6ea8cb8dad60579f3fb50/cf0072d053df3b408fe3c597280fec/39cf0072d053df3b408fe3c597280fec.png?w=350"
            alt="profile"
          />

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              nickname
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
}
export default Profile;
