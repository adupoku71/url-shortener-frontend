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
