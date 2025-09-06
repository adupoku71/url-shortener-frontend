export interface UrlInputFormProps {
  longUrl: string;
  setLongUrl: (url: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}

export interface ResultBoxProps {
  shortUrl: string;
  copied: boolean;
  copyToClipboard: () => void;
}

export interface QuickLinkCardProps {
  href: string;
  title: string;
  description: string;
  iconPath: string;
}

export interface FeatureCardProps {
  path: string;
  title: string;
  description: string;
}
