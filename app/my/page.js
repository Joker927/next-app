import Image from "next/image";

export default function My() {
  return (
    <div className="p-4">
      {/* 我的信息展示 */}
      <div className="flex items-center bg-gray-100 p-4 rounded">
        {/* 头像 */}
        <Image
          src="/avatar.jpg"
          alt="My Avatar"
          width={64}
          height={64}
          className="rounded-full"
        />
        {/* 名称和手机号 */}
        <div className="ml-4">
          <div className="text-lg font-semibold">我的名称</div>
          <div className="text-gray-600">13800138000</div>
        </div>
      </div>
    </div>
  );
}
