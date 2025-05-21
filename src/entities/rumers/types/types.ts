export interface ShowProfileRequest {
    meta: {
        session_id: string;
        cmd: 'show_profile_me';
    };
    data: {
        nickname: string;
    };
}

export interface ProfileLabel {
    text?: string | null;
    icon?: string | null;
}

export interface ProfileData {
    page: {
        image: string | null;
        title: string | null;
        subtitle: string | null;
        middle: { group: { label: ProfileLabel }[] }[];
    };
}

export interface ShowProfileResponse {
    success: boolean;
    data: ProfileData;
}
