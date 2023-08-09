export type AuthStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
};

export type HomeStackParamList ={

}

export interface RootStackParamList extends HomeStackParamList, AuthStackParamList {}


declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}