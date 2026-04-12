import Button from "../ui/button/Button";
import Badge from "../ui/badge/Badge";
import {
  HiMiniXMark,
  HiMiniCheck,
  HiOutlineEnvelope,
  HiOutlineBell,
} from "react-icons/hi2";

type NotificationCardProps = {
  avatarUrl?: string;
  userName?: string;
  notificationText?: string;
  badgeText?: string;
  time?: string;
  title?: string;
  className?: string;
};

function NotificationCard({
  avatarUrl,
  userName,
  notificationText,
  badgeText,
  time,
  title,
  className = "",
}: NotificationCardProps) {
  const isInvite = !!badgeText;

  const DefaultIcon = isInvite ? HiOutlineEnvelope : HiOutlineBell;

  return (
    <div
      className={`rounded-2xl border border-custom-blue-100 bg-white p-5 md:p-6 
      dark:border-gray-800 dark:bg-white/[0.03] shadow-soft-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer ${className}`}
    >
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
        
        {avatarUrl ? (
          <div className="flex items-center justify-center w-12 h-12 overflow-hidden rounded-full">
            <img
              src={avatarUrl}
              alt="Usuário"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-custom-blue-200 dark:bg-gray-800">
            <DefaultIcon className="text-blue-500 dark:text-gray-400" size={24} />
          </div>
        )}
        
        <div className="flex flex-col gap-2">
          {title && (
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white/90">
              {title}
            </h3>
          )}

          {(userName || notificationText) && (
            <p className="text-sm text-custom-blue-100 dark:text-gray-400">
              {userName && (
                <span className="text-gray-800 dark:text-white/90 font-medium">
                  {userName}{" "}
                </span>
              )}
              {notificationText}
            </p>
          )}

          {badgeText && (
            <div>
              <Badge size="sm" color="info">
                {badgeText}
              </Badge>
            </div>
          )}

          {time && (
            <span className="text-xs text-gray-400 dark:text-gray-500">
              {time}
            </span>
          )}
        </div>
        
        {isInvite && (
          <div className="flex items-center gap-2">
            <Button className="font-space font-semibold" size="xs" fontSize="xs">
              <HiMiniCheck size={16} /> Aceitar
            </Button>

            <Button
              className="font-space font-semibold"
              size="xs"
              fontSize="xs"
              variant="secondary"
            >
              <HiMiniXMark size={16} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NotificationCard;