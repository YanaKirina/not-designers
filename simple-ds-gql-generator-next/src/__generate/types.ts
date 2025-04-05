export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  Byte: { input: any; output: any; }
  Char: { input: any; output: any; }
  Long: { input: any; output: any; }
  Short: { input: any; output: any; }
  _ByteArray: { input: any; output: any; }
  _Date: { input: any; output: any; }
  _DateTime: { input: any; output: any; }
  _Float4: { input: any; output: any; }
  _OffsetDateTime: { input: any; output: any; }
  _Time: { input: any; output: any; }
};

export type Event = {
  _calc: _Calculation;
  aggregateRoot?: Maybe<Organization>;
  description: Scalars['String']['output'];
  endDateTime?: Maybe<Scalars['_DateTime']['output']>;
  id: Scalars['ID']['output'];
  organization: Organization;
  startDateTime?: Maybe<Scalars['_DateTime']['output']>;
  statusForX: _G_SysStatusFields;
  type: Scalars['String']['output'];
};


export type EventAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type EventOrganizationArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type Organization = {
  _calc: _Calculation;
  eventList: _Ec_Event;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  sys_ver?: Maybe<Scalars['Long']['output']>;
  type: Scalars['String']['output'];
};


export type OrganizationEventListArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  elemAlias?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type Person = {
  _calc: _Calculation;
  birthDate?: Maybe<Scalars['_Date']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  sys_ver?: Maybe<Scalars['Long']['output']>;
  type: Scalars['String']['output'];
};

export type RootDictionary = {
  _calc: _Calculation;
  id: Scalars['ID']['output'];
  sys_ver?: Maybe<Scalars['Long']['output']>;
  type: Scalars['String']['output'];
};

export type Volonteer = {
  _calc: _Calculation;
  eventBookingList: _Ec_VolonteerEventRequest;
  id: Scalars['ID']['output'];
  nickName?: Maybe<Scalars['String']['output']>;
  person: _G_PersonReference;
  sys_ver?: Maybe<Scalars['Long']['output']>;
  type: Scalars['String']['output'];
};


export type VolonteerEventBookingListArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  elemAlias?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type VolonteerEventRequest = {
  _calc: _Calculation;
  aggregateRoot?: Maybe<Volonteer>;
  description?: Maybe<Scalars['String']['output']>;
  event: _G_EventReference;
  id: Scalars['ID']['output'];
  statusForX: _G_SysStatusFields;
  type: Scalars['String']['output'];
  volonteer: Volonteer;
};


export type VolonteerEventRequestAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type VolonteerEventRequestVolonteerArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type _Calculation = {
  __typename?: '_Calculation';
  bigDecimal?: Maybe<Scalars['BigDecimal']['output']>;
  boolean?: Maybe<Scalars['Boolean']['output']>;
  byte?: Maybe<Scalars['Byte']['output']>;
  byteArray?: Maybe<Scalars['_ByteArray']['output']>;
  char?: Maybe<Scalars['Char']['output']>;
  date?: Maybe<Scalars['_Date']['output']>;
  dateTime?: Maybe<Scalars['_DateTime']['output']>;
  double?: Maybe<Scalars['Float']['output']>;
  float?: Maybe<Scalars['_Float4']['output']>;
  int?: Maybe<Scalars['Int']['output']>;
  long?: Maybe<Scalars['Long']['output']>;
  offsetDateTime?: Maybe<Scalars['_OffsetDateTime']['output']>;
  short?: Maybe<Scalars['Short']['output']>;
  string?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['_Time']['output']>;
};


export type _CalculationBigDecimalArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationBooleanArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationByteArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationByteArrayArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationCharArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationDateArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationDateTimeArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationDoubleArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationFloatArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationIntArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationLongArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationOffsetDateTimeArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationShortArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationStringArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationTimeArgs = {
  expr: Scalars['String']['input'];
};

export type _CompareEventInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  endDateTime?: InputMaybe<Scalars['_DateTime']['input']>;
  startDateTime?: InputMaybe<Scalars['_DateTime']['input']>;
};

export type _CompareOrganizationInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type _ComparePersonInput = {
  birthDate?: InputMaybe<Scalars['_Date']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type _CompareVolonteerEventRequestInput = {
  description?: InputMaybe<Scalars['String']['input']>;
};

export type _CompareVolonteerInput = {
  nickName?: InputMaybe<Scalars['String']['input']>;
};

export type _CreateEventInput = {
  description: Scalars['String']['input'];
  endDateTime?: InputMaybe<Scalars['_DateTime']['input']>;
  organization: Scalars['ID']['input'];
  startDateTime?: InputMaybe<Scalars['_DateTime']['input']>;
  statusForX?: InputMaybe<_SysStatusFieldsInput>;
};

export type _CreateOrganizationInput = {
  name: Scalars['String']['input'];
};

export type _CreatePersonInput = {
  birthDate?: InputMaybe<Scalars['_Date']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type _CreateRootDictionaryInput = {
  id: Scalars['ID']['input'];
};

export type _CreateVolonteerEventRequestInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  event?: InputMaybe<_DoubleReferenceInput>;
  statusForX?: InputMaybe<_SysStatusFieldsInput>;
  volonteer: Scalars['ID']['input'];
};

export type _CreateVolonteerInput = {
  nickName?: InputMaybe<Scalars['String']['input']>;
  person: _SingleReferenceInput;
};

export type _DeleteManyEventInput = {
  compare?: InputMaybe<_CompareEventInput>;
  id: Scalars['String']['input'];
};

export type _DeleteManyOrganizationInput = {
  compare?: InputMaybe<_CompareOrganizationInput>;
  id: Scalars['String']['input'];
};

export type _DeleteManyPersonInput = {
  compare?: InputMaybe<_ComparePersonInput>;
  id: Scalars['String']['input'];
};

export type _DeleteManyRootDictionaryInput = {
  id: Scalars['String']['input'];
};

export type _DeleteManyVolonteerEventRequestInput = {
  compare?: InputMaybe<_CompareVolonteerEventRequestInput>;
  id: Scalars['String']['input'];
};

export type _DeleteManyVolonteerInput = {
  compare?: InputMaybe<_CompareVolonteerInput>;
  id: Scalars['String']['input'];
};

export enum _DependsOnDependencyByGet {
  Exists = 'EXISTS',
  NotExists = 'NOT_EXISTS'
}

export enum _DependsOnDependencyByUpdateOrCreate {
  Created = 'CREATED',
  NotCreated = 'NOT_CREATED'
}

export type _DictionaryPacket = {
  __typename?: '_DictionaryPacket';
  deleteManyRootDictionary?: Maybe<Scalars['String']['output']>;
  deleteRootDictionary?: Maybe<Scalars['String']['output']>;
  getRootDictionary?: Maybe<RootDictionary>;
};


export type _DictionaryPacketDeleteManyRootDictionaryArgs = {
  input: Array<_DeleteManyRootDictionaryInput>;
};


export type _DictionaryPacketDeleteRootDictionaryArgs = {
  id: Scalars['ID']['input'];
};


export type _DictionaryPacketGetRootDictionaryArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: _GetLockMode;
};

export type _DoubleReferenceInput = {
  entityId: Scalars['String']['input'];
  rootEntityId?: InputMaybe<Scalars['String']['input']>;
};

export type _Ec_Event = {
  __typename?: '_EC_Event';
  count: Scalars['Int']['output'];
  elems: Array<Event>;
};

export type _Ec_Organization = {
  __typename?: '_EC_Organization';
  count: Scalars['Int']['output'];
  elems: Array<Organization>;
};

export type _Ec_Person = {
  __typename?: '_EC_Person';
  count: Scalars['Int']['output'];
  elems: Array<Person>;
};

export type _Ec_RootDictionary = {
  __typename?: '_EC_RootDictionary';
  count: Scalars['Int']['output'];
  elems: Array<RootDictionary>;
};

export type _Ec_Volonteer = {
  __typename?: '_EC_Volonteer';
  count: Scalars['Int']['output'];
  elems: Array<Volonteer>;
};

export type _Ec_VolonteerEventRequest = {
  __typename?: '_EC_VolonteerEventRequest';
  count: Scalars['Int']['output'];
  elems: Array<VolonteerEventRequest>;
};

export type _E_Event = Event & _Entity & {
  __typename?: '_E_Event';
  _calc: _Calculation;
  aggregateRoot?: Maybe<Organization>;
  description: Scalars['String']['output'];
  endDateTime?: Maybe<Scalars['_DateTime']['output']>;
  id: Scalars['ID']['output'];
  organization: Organization;
  startDateTime?: Maybe<Scalars['_DateTime']['output']>;
  statusForX: _G_SysStatusFields;
  type: Scalars['String']['output'];
};


export type _E_EventAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type _E_EventOrganizationArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type _E_Organization = Organization & _Entity & {
  __typename?: '_E_Organization';
  _calc: _Calculation;
  eventList: _Ec_Event;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  sys_ver?: Maybe<Scalars['Long']['output']>;
  type: Scalars['String']['output'];
};


export type _E_OrganizationEventListArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  elemAlias?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _E_Person = Person & _Entity & {
  __typename?: '_E_Person';
  _calc: _Calculation;
  birthDate?: Maybe<Scalars['_Date']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  sys_ver?: Maybe<Scalars['Long']['output']>;
  type: Scalars['String']['output'];
};

export type _E_RootDictionary = RootDictionary & _Entity & {
  __typename?: '_E_RootDictionary';
  _calc: _Calculation;
  id: Scalars['ID']['output'];
  sys_ver?: Maybe<Scalars['Long']['output']>;
  type: Scalars['String']['output'];
};

export type _E_Volonteer = Volonteer & _Entity & {
  __typename?: '_E_Volonteer';
  _calc: _Calculation;
  eventBookingList: _Ec_VolonteerEventRequest;
  id: Scalars['ID']['output'];
  nickName?: Maybe<Scalars['String']['output']>;
  person: _G_PersonReference;
  sys_ver?: Maybe<Scalars['Long']['output']>;
  type: Scalars['String']['output'];
};


export type _E_VolonteerEventBookingListArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  elemAlias?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _E_VolonteerEventRequest = VolonteerEventRequest & _Entity & {
  __typename?: '_E_VolonteerEventRequest';
  _calc: _Calculation;
  aggregateRoot?: Maybe<Volonteer>;
  description?: Maybe<Scalars['String']['output']>;
  event: _G_EventReference;
  id: Scalars['ID']['output'];
  statusForX: _G_SysStatusFields;
  type: Scalars['String']['output'];
  volonteer: Volonteer;
};


export type _E_VolonteerEventRequestAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type _E_VolonteerEventRequestVolonteerArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type _Entity = {
  id: Scalars['ID']['output'];
};

export type _G_EventReference = {
  __typename?: '_G_EventReference';
  entity?: Maybe<Event>;
  entityId?: Maybe<Scalars['String']['output']>;
  rootEntityId?: Maybe<Scalars['String']['output']>;
};


export type _G_EventReferenceEntityArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type _G_PersonReference = {
  __typename?: '_G_PersonReference';
  entity?: Maybe<Person>;
  entityId?: Maybe<Scalars['String']['output']>;
};


export type _G_PersonReferenceEntityArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type _G_SysStatusFields = {
  __typename?: '_G_SysStatusFields';
  code?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
};

export enum _GetLockMode {
  NotUse = 'NOT_USE',
  Nowait = 'NOWAIT',
  Wait = 'WAIT'
}

export type _IncBigDecimalValue = {
  fail?: InputMaybe<_IncBigDecimalValueFail>;
  negative?: InputMaybe<Scalars['Boolean']['input']>;
  value: Scalars['BigDecimal']['input'];
};

export type _IncBigDecimalValueFail = {
  operation: _IncFailOperator;
  value: Scalars['BigDecimal']['input'];
};

export type _IncDoubleValue = {
  fail?: InputMaybe<_IncDoubleValueFail>;
  negative?: InputMaybe<Scalars['Boolean']['input']>;
  value: Scalars['Float']['input'];
};

export type _IncDoubleValueFail = {
  operation: _IncFailOperator;
  value: Scalars['Float']['input'];
};

export enum _IncFailOperator {
  Ge = 'ge',
  Gt = 'gt',
  Le = 'le',
  Lt = 'lt'
}

export type _IncFloatValue = {
  fail?: InputMaybe<_IncFloatValueFail>;
  negative?: InputMaybe<Scalars['Boolean']['input']>;
  value: Scalars['_Float4']['input'];
};

export type _IncFloatValueFail = {
  operation: _IncFailOperator;
  value: Scalars['_Float4']['input'];
};

export type _IncIntValue = {
  fail?: InputMaybe<_IncIntValueFail>;
  negative?: InputMaybe<Scalars['Boolean']['input']>;
  value: Scalars['Int']['input'];
};

export type _IncIntValueFail = {
  operation: _IncFailOperator;
  value: Scalars['Int']['input'];
};

export type _IncLongValue = {
  fail?: InputMaybe<_IncLongValueFail>;
  negative?: InputMaybe<Scalars['Boolean']['input']>;
  value: Scalars['Long']['input'];
};

export type _IncLongValueFail = {
  operation: _IncFailOperator;
  value: Scalars['Long']['input'];
};

export type _MergedEntitiesCollection = {
  __typename?: '_MergedEntitiesCollection';
  count: Scalars['Int']['output'];
  elems: Array<_Entity>;
};

export type _Mutation = {
  __typename?: '_Mutation';
  dictionaryPacket?: Maybe<_DictionaryPacket>;
  packet?: Maybe<_Packet>;
};


export type _MutationPacketArgs = {
  aggregateVersion?: InputMaybe<Scalars['Long']['input']>;
  idempotencePacketId?: InputMaybe<Scalars['String']['input']>;
};

export type _Packet = {
  __typename?: '_Packet';
  aggregateVersion?: Maybe<Scalars['Long']['output']>;
  createEvent?: Maybe<Event>;
  createManyEvent?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createManyOrganization?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createManyPerson?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createManyVolonteer?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createManyVolonteerEventRequest?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createOrganization?: Maybe<Organization>;
  createPerson?: Maybe<Person>;
  createVolonteer?: Maybe<Volonteer>;
  createVolonteerEventRequest?: Maybe<VolonteerEventRequest>;
  deleteEvent?: Maybe<Scalars['String']['output']>;
  deleteManyEvent?: Maybe<Scalars['String']['output']>;
  deleteManyOrganization?: Maybe<Scalars['String']['output']>;
  deleteManyPerson?: Maybe<Scalars['String']['output']>;
  deleteManyVolonteer?: Maybe<Scalars['String']['output']>;
  deleteManyVolonteerEventRequest?: Maybe<Scalars['String']['output']>;
  deleteOrganization?: Maybe<Scalars['String']['output']>;
  deletePerson?: Maybe<Scalars['String']['output']>;
  deleteVolonteer?: Maybe<Scalars['String']['output']>;
  deleteVolonteerEventRequest?: Maybe<Scalars['String']['output']>;
  getEvent?: Maybe<Event>;
  getOrganization?: Maybe<Organization>;
  getPerson?: Maybe<Person>;
  getRootDictionary?: Maybe<RootDictionary>;
  getVolonteer?: Maybe<Volonteer>;
  getVolonteerEventRequest?: Maybe<VolonteerEventRequest>;
  isIdempotenceResponse?: Maybe<Scalars['Boolean']['output']>;
  updateEvent?: Maybe<Event>;
  updateManyEvent: Scalars['String']['output'];
  updateManyOrganization: Scalars['String']['output'];
  updateManyPerson: Scalars['String']['output'];
  updateManyVolonteer: Scalars['String']['output'];
  updateManyVolonteerEventRequest: Scalars['String']['output'];
  updateOrganization?: Maybe<Organization>;
  updatePerson?: Maybe<Person>;
  updateVolonteer?: Maybe<Volonteer>;
  updateVolonteerEventRequest?: Maybe<VolonteerEventRequest>;
};


export type _PacketCreateEventArgs = {
  input: _CreateEventInput;
};


export type _PacketCreateManyEventArgs = {
  input: Array<_CreateEventInput>;
};


export type _PacketCreateManyOrganizationArgs = {
  input: Array<_CreateOrganizationInput>;
};


export type _PacketCreateManyPersonArgs = {
  input: Array<_CreatePersonInput>;
};


export type _PacketCreateManyVolonteerArgs = {
  input: Array<_CreateVolonteerInput>;
};


export type _PacketCreateManyVolonteerEventRequestArgs = {
  input: Array<_CreateVolonteerEventRequestInput>;
};


export type _PacketCreateOrganizationArgs = {
  input: _CreateOrganizationInput;
};


export type _PacketCreatePersonArgs = {
  input: _CreatePersonInput;
};


export type _PacketCreateVolonteerArgs = {
  input: _CreateVolonteerInput;
};


export type _PacketCreateVolonteerEventRequestArgs = {
  input: _CreateVolonteerEventRequestInput;
};


export type _PacketDeleteEventArgs = {
  compare?: InputMaybe<_CompareEventInput>;
  id: Scalars['ID']['input'];
};


export type _PacketDeleteManyEventArgs = {
  input: Array<_DeleteManyEventInput>;
};


export type _PacketDeleteManyOrganizationArgs = {
  input: Array<_DeleteManyOrganizationInput>;
};


export type _PacketDeleteManyPersonArgs = {
  input: Array<_DeleteManyPersonInput>;
};


export type _PacketDeleteManyVolonteerArgs = {
  input: Array<_DeleteManyVolonteerInput>;
};


export type _PacketDeleteManyVolonteerEventRequestArgs = {
  input: Array<_DeleteManyVolonteerEventRequestInput>;
};


export type _PacketDeleteOrganizationArgs = {
  compare?: InputMaybe<_CompareOrganizationInput>;
  id: Scalars['ID']['input'];
};


export type _PacketDeletePersonArgs = {
  compare?: InputMaybe<_ComparePersonInput>;
  id: Scalars['ID']['input'];
};


export type _PacketDeleteVolonteerArgs = {
  compare?: InputMaybe<_CompareVolonteerInput>;
  id: Scalars['ID']['input'];
};


export type _PacketDeleteVolonteerEventRequestArgs = {
  compare?: InputMaybe<_CompareVolonteerEventRequestInput>;
  id: Scalars['ID']['input'];
};


export type _PacketGetEventArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: _GetLockMode;
};


export type _PacketGetOrganizationArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: _GetLockMode;
};


export type _PacketGetPersonArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: _GetLockMode;
};


export type _PacketGetRootDictionaryArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: _GetLockMode;
};


export type _PacketGetVolonteerArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: _GetLockMode;
};


export type _PacketGetVolonteerEventRequestArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: _GetLockMode;
};


export type _PacketUpdateEventArgs = {
  compare?: InputMaybe<_CompareEventInput>;
  input: _UpdateEventInput;
};


export type _PacketUpdateManyEventArgs = {
  input: Array<_UpdateManyEventInput>;
};


export type _PacketUpdateManyOrganizationArgs = {
  input: Array<_UpdateManyOrganizationInput>;
};


export type _PacketUpdateManyPersonArgs = {
  input: Array<_UpdateManyPersonInput>;
};


export type _PacketUpdateManyVolonteerArgs = {
  input: Array<_UpdateManyVolonteerInput>;
};


export type _PacketUpdateManyVolonteerEventRequestArgs = {
  input: Array<_UpdateManyVolonteerEventRequestInput>;
};


export type _PacketUpdateOrganizationArgs = {
  compare?: InputMaybe<_CompareOrganizationInput>;
  input: _UpdateOrganizationInput;
};


export type _PacketUpdatePersonArgs = {
  compare?: InputMaybe<_ComparePersonInput>;
  input: _UpdatePersonInput;
};


export type _PacketUpdateVolonteerArgs = {
  compare?: InputMaybe<_CompareVolonteerInput>;
  input: _UpdateVolonteerInput;
};


export type _PacketUpdateVolonteerEventRequestArgs = {
  compare?: InputMaybe<_CompareVolonteerEventRequestInput>;
  input: _UpdateVolonteerEventRequestInput;
};

export type _Query = {
  __typename?: '_Query';
  merge: _MergedEntitiesCollection;
  resolveReferences: Array<_Reference>;
  searchEvent: _Ec_Event;
  searchOrganization: _Ec_Organization;
  searchPerson: _Ec_Person;
  searchRootDictionary: _Ec_RootDictionary;
  searchVolonteer: _Ec_Volonteer;
  searchVolonteerEventRequest: _Ec_VolonteerEventRequest;
  strExpr?: Maybe<Scalars['String']['output']>;
};


export type _QueryMergeArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QueryResolveReferencesArgs = {
  ids: Array<Scalars['ID']['input']>;
  referenceType: Scalars['String']['input'];
};


export type _QuerySearchEventArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchOrganizationArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchPersonArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchRootDictionaryArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchVolonteerArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchVolonteerEventRequestArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QueryStrExprArgs = {
  bigDecimals?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  booleans?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  bytes?: InputMaybe<Array<Scalars['Byte']['input']>>;
  chars?: InputMaybe<Array<Scalars['Char']['input']>>;
  dateTimes?: InputMaybe<Array<Scalars['_DateTime']['input']>>;
  dates?: InputMaybe<Array<Scalars['_Date']['input']>>;
  doubles?: InputMaybe<Array<Scalars['Float']['input']>>;
  floats?: InputMaybe<Array<Scalars['_Float4']['input']>>;
  ints?: InputMaybe<Array<Scalars['Int']['input']>>;
  longs?: InputMaybe<Array<Scalars['Long']['input']>>;
  offsetDateTimes?: InputMaybe<Array<Scalars['_OffsetDateTime']['input']>>;
  shorts?: InputMaybe<Array<Scalars['Short']['input']>>;
  strings?: InputMaybe<Array<Scalars['String']['input']>>;
  times?: InputMaybe<Array<Scalars['_Time']['input']>>;
};

export type _R_Event = _Reference & {
  __typename?: '_R_Event';
  entity?: Maybe<Event>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_Organization = _Reference & {
  __typename?: '_R_Organization';
  entity?: Maybe<Organization>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_Person = _Reference & {
  __typename?: '_R_Person';
  entity?: Maybe<Person>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_RootDictionary = _Reference & {
  __typename?: '_R_RootDictionary';
  entity?: Maybe<RootDictionary>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_Volonteer = _Reference & {
  __typename?: '_R_Volonteer';
  entity?: Maybe<Volonteer>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_VolonteerEventRequest = _Reference & {
  __typename?: '_R_VolonteerEventRequest';
  entity?: Maybe<VolonteerEventRequest>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _Reference = {
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _SingleReferenceInput = {
  entityId: Scalars['String']['input'];
};

export type _SortCriterionSpecification = {
  crit: Scalars['String']['input'];
  nullsLast?: InputMaybe<Scalars['Boolean']['input']>;
  order?: _SortOrder;
};

export enum _SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type _SysStatusFieldsInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type _UpdateEventInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  endDateTime?: InputMaybe<Scalars['_DateTime']['input']>;
  id: Scalars['ID']['input'];
  organization?: InputMaybe<Scalars['ID']['input']>;
  startDateTime?: InputMaybe<Scalars['_DateTime']['input']>;
  statusForX?: InputMaybe<_SysStatusFieldsInput>;
};

export type _UpdateManyEventInput = {
  compare?: InputMaybe<_CompareEventInput>;
  param?: InputMaybe<_UpdateEventInput>;
};

export type _UpdateManyOrganizationInput = {
  compare?: InputMaybe<_CompareOrganizationInput>;
  param?: InputMaybe<_UpdateOrganizationInput>;
};

export type _UpdateManyPersonInput = {
  compare?: InputMaybe<_ComparePersonInput>;
  param?: InputMaybe<_UpdatePersonInput>;
};

export type _UpdateManyVolonteerEventRequestInput = {
  compare?: InputMaybe<_CompareVolonteerEventRequestInput>;
  param?: InputMaybe<_UpdateVolonteerEventRequestInput>;
};

export type _UpdateManyVolonteerInput = {
  compare?: InputMaybe<_CompareVolonteerInput>;
  param?: InputMaybe<_UpdateVolonteerInput>;
};

export type _UpdateOrganizationInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type _UpdatePersonInput = {
  birthDate?: InputMaybe<Scalars['_Date']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type _UpdateVolonteerEventRequestInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  event?: InputMaybe<_DoubleReferenceInput>;
  id: Scalars['ID']['input'];
  statusForX?: InputMaybe<_SysStatusFieldsInput>;
  volonteer?: InputMaybe<Scalars['ID']['input']>;
};

export type _UpdateVolonteerInput = {
  id: Scalars['ID']['input'];
  nickName?: InputMaybe<Scalars['String']['input']>;
  person?: InputMaybe<_SingleReferenceInput>;
};

export type EventAttributesFragment = { __typename: '_E_Event', id: string, description: string, endDateTime?: any | null, startDateTime?: any | null, aggregateRoot?: { __typename?: '_E_Organization', id: string } | null, organization: { __typename?: '_E_Organization', id: string }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null } };

export type SearchEventQueryVariables = Exact<{
  cond?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchEventQuery = { __typename?: '_Query', searchEvent: { __typename?: '_EC_Event', elems: Array<{ __typename: '_E_Event', id: string, description: string, endDateTime?: any | null, startDateTime?: any | null, aggregateRoot?: { __typename?: '_E_Organization', id: string } | null, organization: { __typename?: '_E_Organization', id: string }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null } }> } };

export type GetForUpdateEventMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetForUpdateEventMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', getEvent?: { __typename: '_E_Event', id: string, description: string, endDateTime?: any | null, startDateTime?: any | null, aggregateRoot?: { __typename?: '_E_Organization', id: string } | null, organization: { __typename?: '_E_Organization', id: string }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null } } | null } | null };

export type CreateEventMutationVariables = Exact<{
  input: _CreateEventInput;
}>;


export type CreateEventMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', createEvent?: { __typename: '_E_Event', id: string, description: string, endDateTime?: any | null, startDateTime?: any | null, aggregateRoot?: { __typename?: '_E_Organization', id: string } | null, organization: { __typename?: '_E_Organization', id: string }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null } } | null } | null };

export type UpdateEventMutationVariables = Exact<{
  input: _UpdateEventInput;
}>;


export type UpdateEventMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', updateEvent?: { __typename: '_E_Event', id: string, description: string, endDateTime?: any | null, startDateTime?: any | null, aggregateRoot?: { __typename?: '_E_Organization', id: string } | null, organization: { __typename?: '_E_Organization', id: string }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null } } | null } | null };

export type DeleteEventMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteEventMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', deleteEvent?: string | null } | null };

export type OrganizationAttributesFragment = { __typename: '_E_Organization', id: string, name: string };

export type SearchOrganizationQueryVariables = Exact<{
  cond?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchOrganizationQuery = { __typename?: '_Query', searchOrganization: { __typename?: '_EC_Organization', elems: Array<{ __typename: '_E_Organization', id: string, name: string }> } };

export type GetForUpdateOrganizationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetForUpdateOrganizationMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', getOrganization?: { __typename: '_E_Organization', id: string, name: string } | null } | null };

export type CreateOrganizationMutationVariables = Exact<{
  input: _CreateOrganizationInput;
}>;


export type CreateOrganizationMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', createOrganization?: { __typename: '_E_Organization', id: string, name: string } | null } | null };

export type UpdateOrganizationMutationVariables = Exact<{
  input: _UpdateOrganizationInput;
}>;


export type UpdateOrganizationMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', updateOrganization?: { __typename: '_E_Organization', id: string, name: string } | null } | null };

export type DeleteOrganizationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteOrganizationMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', deleteOrganization?: string | null } | null };

export type VolonteerEventRequestAttributesFragment = { __typename: '_E_VolonteerEventRequest', id: string, description?: string | null, aggregateRoot?: { __typename?: '_E_Volonteer', id: string } | null, event: { __typename?: '_G_EventReference', entityId?: string | null }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null }, volonteer: { __typename?: '_E_Volonteer', id: string } };

export type SearchVolonteerEventRequestQueryVariables = Exact<{
  cond?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchVolonteerEventRequestQuery = { __typename?: '_Query', searchVolonteerEventRequest: { __typename?: '_EC_VolonteerEventRequest', elems: Array<{ __typename: '_E_VolonteerEventRequest', id: string, description?: string | null, aggregateRoot?: { __typename?: '_E_Volonteer', id: string } | null, event: { __typename?: '_G_EventReference', entityId?: string | null }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null }, volonteer: { __typename?: '_E_Volonteer', id: string } }> } };

export type GetForUpdateVolonteerEventRequestMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetForUpdateVolonteerEventRequestMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', getVolonteerEventRequest?: { __typename: '_E_VolonteerEventRequest', id: string, description?: string | null, aggregateRoot?: { __typename?: '_E_Volonteer', id: string } | null, event: { __typename?: '_G_EventReference', entityId?: string | null }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null }, volonteer: { __typename?: '_E_Volonteer', id: string } } | null } | null };

export type CreateVolonteerEventRequestMutationVariables = Exact<{
  input: _CreateVolonteerEventRequestInput;
}>;


export type CreateVolonteerEventRequestMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', createVolonteerEventRequest?: { __typename: '_E_VolonteerEventRequest', id: string, description?: string | null, aggregateRoot?: { __typename?: '_E_Volonteer', id: string } | null, event: { __typename?: '_G_EventReference', entityId?: string | null }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null }, volonteer: { __typename?: '_E_Volonteer', id: string } } | null } | null };

export type UpdateVolonteerEventRequestMutationVariables = Exact<{
  input: _UpdateVolonteerEventRequestInput;
}>;


export type UpdateVolonteerEventRequestMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', updateVolonteerEventRequest?: { __typename: '_E_VolonteerEventRequest', id: string, description?: string | null, aggregateRoot?: { __typename?: '_E_Volonteer', id: string } | null, event: { __typename?: '_G_EventReference', entityId?: string | null }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null }, volonteer: { __typename?: '_E_Volonteer', id: string } } | null } | null };

export type DeleteVolonteerEventRequestMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteVolonteerEventRequestMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', deleteVolonteerEventRequest?: string | null } | null };

export type PersonAttributesFragment = { __typename: '_E_Person', id: string, birthDate?: any | null, firstName: string, lastName: string };

export type SearchPersonQueryVariables = Exact<{
  cond?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchPersonQuery = { __typename?: '_Query', searchPerson: { __typename?: '_EC_Person', elems: Array<{ __typename: '_E_Person', id: string, birthDate?: any | null, firstName: string, lastName: string }> } };

export type GetForUpdatePersonMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetForUpdatePersonMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', getPerson?: { __typename: '_E_Person', id: string, birthDate?: any | null, firstName: string, lastName: string } | null } | null };

export type CreatePersonMutationVariables = Exact<{
  input: _CreatePersonInput;
}>;


export type CreatePersonMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', createPerson?: { __typename: '_E_Person', id: string, birthDate?: any | null, firstName: string, lastName: string } | null } | null };

export type UpdatePersonMutationVariables = Exact<{
  input: _UpdatePersonInput;
}>;


export type UpdatePersonMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', updatePerson?: { __typename: '_E_Person', id: string, birthDate?: any | null, firstName: string, lastName: string } | null } | null };

export type DeletePersonMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeletePersonMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', deletePerson?: string | null } | null };

export type VolonteerAttributesFragment = { __typename: '_E_Volonteer', id: string, nickName?: string | null, person: { __typename?: '_G_PersonReference', entityId?: string | null } };

export type SearchVolonteerQueryVariables = Exact<{
  cond?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchVolonteerQuery = { __typename?: '_Query', searchVolonteer: { __typename?: '_EC_Volonteer', elems: Array<{ __typename: '_E_Volonteer', id: string, nickName?: string | null, person: { __typename?: '_G_PersonReference', entityId?: string | null } }> } };

export type GetForUpdateVolonteerMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetForUpdateVolonteerMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', getVolonteer?: { __typename: '_E_Volonteer', id: string, nickName?: string | null, person: { __typename?: '_G_PersonReference', entityId?: string | null } } | null } | null };

export type CreateVolonteerMutationVariables = Exact<{
  input: _CreateVolonteerInput;
}>;


export type CreateVolonteerMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', createVolonteer?: { __typename: '_E_Volonteer', id: string, nickName?: string | null, person: { __typename?: '_G_PersonReference', entityId?: string | null } } | null } | null };

export type UpdateVolonteerMutationVariables = Exact<{
  input: _UpdateVolonteerInput;
}>;


export type UpdateVolonteerMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', updateVolonteer?: { __typename: '_E_Volonteer', id: string, nickName?: string | null, person: { __typename?: '_G_PersonReference', entityId?: string | null } } | null } | null };

export type DeleteVolonteerMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteVolonteerMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', deleteVolonteer?: string | null } | null };
