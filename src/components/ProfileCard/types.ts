export type SocialPlatform = 'instagram' | 'x' | 'github' | 'linkedin' | 'website';

export interface ProfileStats {
  followers?: string | number;
  following?: string | number;
  posts?: string | number;
}
