import { OutgoingHttpHeaders } from "http";
import { UrnOCPPCp220203AuthorizeRequest } from "./types/AuthorizeRequest";
import { UrnOCPPCp220203AuthorizeResponse } from "./types/AuthorizeResponse";
import { UrnOCPPCp220203BootNotificationRequest } from "./types/BootNotification";
import { UrnOCPPCp220203BootNotificationResponse } from "./types/BootNotificationResponse";
import { UrnOCPPCp220203CancelReservationRequest } from "./types/CancelReservationRequest";
import { UrnOCPPCp220203CancelReservationResponse } from "./types/CancelReservationResponse";
import { UrnOCPPCp220203CertificateSignedRequest } from "./types/CertificateSignedRequest";
import { UrnOCPPCp220203CertificateSignedResponse } from "./types/CertificateSignedResponse";
import { UrnOCPPCp220203ChangeAvailabilityRequest } from "./types/ChangeAvailabilityRequest";
import { UrnOCPPCp220203ChangeAvailabilityResponse } from "./types/ChangeAvailabilityResponse";
import { UrnOCPPCp220203ClearCacheRequest } from "./types/ClearCacheRequest";
import { UrnOCPPCp220203ClearCacheResponse } from "./types/ClearCacheResponse";
import { UrnOCPPCp220203ClearChargingProfileRequest } from "./types/ClearChargingProfileRequest";
import { UrnOCPPCp220203ClearChargingProfileResponse } from "./types/ClearChargingProfileResponse";
import { UrnOCPPCp220203ClearDisplayMessageRequest } from "./types/ClearDisplayMessageRequest";
import { UrnOCPPCp220203ClearDisplayMessageResponse } from "./types/ClearDisplayMessageResponse";
import { UrnOCPPCp220203ClearedChargingLimitRequest } from "./types/ClearedChargingLimitRequest";
import { UrnOCPPCp220203ClearedChargingLimitResponse } from "./types/ClearedChargingLimitResponse";
import { UrnOCPPCp220203ClearVariableMonitoringRequest } from "./types/ClearVariableMonitoringRequest";
import { UrnOCPPCp220203ClearVariableMonitoringResponse } from "./types/ClearVariableMonitoringResponse";
import { UrnOCPPCp220203CostUpdatedRequest } from "./types/CostUpdatedRequest";
import { UrnOCPPCp220203CostUpdatedResponse } from "./types/CostUpdatedResponse";
import { UrnOCPPCp220203CustomerInformationRequest } from "./types/CustomerInformationRequest";
import { UrnOCPPCp220203CustomerInformationResponse } from "./types/CustomerInformationResponse";
import { UrnOCPPCp220203DataTransferRequest } from "./types/DataTransferRequest";
import { UrnOCPPCp220203DataTransferResponse } from "./types/DataTransferResponse";
import { UrnOCPPCp220203DeleteCertificateRequest } from "./types/DeleteCertificateRequest";
import { UrnOCPPCp220203DeleteCertificateResponse } from "./types/DeleteCertificateResponse";
import { UrnOCPPCp220203FirmwareStatusNotificationRequest } from "./types/FirmwareStatusNotificationRequest";
import { UrnOCPPCp220203FirmwareStatusNotificationResponse } from "./types/FirmwareStatusNotificationResponse";
import { UrnOCPPCp220203Get15118EVCertificateRequest } from "./types/Get15118EVCertificateRequest";
import { UrnOCPPCp220203Get15118EVCertificateResponse } from "./types/Get15118EVCertificateResponse";
import { UrnOCPPCp220203GetBaseReportRequest } from "./types/GetBaseReportRequest";
import { UrnOCPPCp220203GetBaseReportResponse } from "./types/GetBaseReportResponse";
import { UrnOCPPCp220203GetCertificateStatusRequest } from "./types/GetCertificateStatusRequest";
import { UrnOCPPCp220203GetCertificateStatusResponse } from "./types/GetCertificateStatusResponse";
import { UrnOCPPCp220203GetChargingProfilesRequest } from "./types/GetChargingProfilesRequest";
import { UrnOCPPCp220203GetChargingProfilesResponse } from "./types/GetChargingProfilesResponse";
import { UrnOCPPCp220203GetCompositeScheduleRequest } from "./types/GetCompositeScheduleRequest";
import { UrnOCPPCp220203GetCompositeScheduleResponse } from "./types/GetCompositeScheduleResponse";
import { UrnOCPPCp220203GetDisplayMessagesRequest } from "./types/GetDisplayMessagesRequest";
import { UrnOCPPCp220203GetDisplayMessagesResponse } from "./types/GetDisplayMessagesResponse";
import { UrnOCPPCp220203GetInstalledCertificateIdsRequest } from "./types/GetInstalledCertificateIdsRequest";
import { UrnOCPPCp220203GetInstalledCertificateIdsResponse } from "./types/GetInstalledCertificateIdsResponse";
import { UrnOCPPCp220203GetLocalListVersionRequest } from "./types/GetLocalListVersionRequest";
import { UrnOCPPCp220203GetLocalListVersionResponse } from "./types/GetLocalListVersionResponse";
import { UrnOCPPCp220203GetLogRequest } from "./types/GetLogRequest";
import { UrnOCPPCp220203GetLogResponse } from "./types/GetLogResponse";
import { UrnOCPPCp220203GetMonitoringReportRequest } from "./types/GetMonitoringReportRequest";
import { UrnOCPPCp220203GetMonitoringReportResponse } from "./types/GetMonitoringReportResponse";
import { UrnOCPPCp220203GetReportRequest } from "./types/GetReportRequest";
import { UrnOCPPCp220203GetReportResponse } from "./types/GetReportResponse";
import { UrnOCPPCp220203GetTransactionStatusRequest } from "./types/GetTransactionStatusRequest";
import { UrnOCPPCp220203GetTransactionStatusResponse } from "./types/GetTransactionStatusResponse";
import { UrnOCPPCp220203GetVariablesRequest } from "./types/GetVariablesRequest";
import { UrnOCPPCp220203GetVariablesResponse } from "./types/GetVariablesResponse";
import { UrnOCPPCp220203HeartbeatRequest } from "./types/HeartbeatRequest";
import { UrnOCPPCp220203HeartbeatResponse } from "./types/HeartbeatResponse";
import { UrnOCPPCp220203InstallCertificateRequest } from "./types/InstallCertificateRequest";
import { UrnOCPPCp220203InstallCertificateResponse } from "./types/InstallCertificateResponse";
import { UrnOCPPCp220203LogStatusNotificationRequest } from "./types/LogStatusNotificationRequest";
import { UrnOCPPCp220203LogStatusNotificationResponse } from "./types/LogStatusNotificationResponse";
import { UrnOCPPCp220203MeterValuesRequest } from "./types/MeterValuesRequest";
import { UrnOCPPCp220203MeterValuesResponse } from "./types/MeterValuesResponse";
import { UrnOCPPCp220203NotifyChargingLimitRequest } from "./types/NotifyChargingLimitRequest";
import { UrnOCPPCp220203NotifyChargingLimitResponse } from "./types/NotifyChargingLimitResponse";
import { UrnOCPPCp220203NotifyCustomerInformationRequest } from "./types/NotifyCustomerInformationRequest";
import { UrnOCPPCp220203NotifyCustomerInformationResponse } from "./types/NotifyCustomerInformationResponse";
import { UrnOCPPCp220203NotifyDisplayMessagesRequest } from "./types/NotifyDisplayMessagesRequest";
import { UrnOCPPCp220203NotifyDisplayMessagesResponse } from "./types/NotifyDisplayMessagesResponse";
import { UrnOCPPCp220203NotifyEVChargingNeedsRequest } from "./types/NotifyEVChargingNeedsRequest";
import { UrnOCPPCp220203NotifyEVChargingNeedsResponse } from "./types/NotifyEVChargingNeedsResponse";
import { UrnOCPPCp220203NotifyEVChargingScheduleRequest } from "./types/NotifyEVChargingScheduleRequest";
import { UrnOCPPCp220203NotifyEVChargingScheduleResponse } from "./types/NotifyEVChargingScheduleResponse";
import { UrnOCPPCp220203NotifyEventRequest } from "./types/NotifyEventRequest";
import { UrnOCPPCp220203NotifyEventResponse } from "./types/NotifyEventResponse";
import { UrnOCPPCp220203NotifyMonitoringReportRequest } from "./types/NotifyMonitoringReportRequest";
import { UrnOCPPCp220203NotifyMonitoringReportResponse } from "./types/NotifyMonitoringReportResponse";
import { UrnOCPPCp220203NotifyReportRequest } from "./types/NotifyReportRequest";
import { UrnOCPPCp220203NotifyReportResponse } from "./types/NotifyReportResponse";
import { UrnOCPPCp220203PublishFirmwareRequest } from "./types/PublishFirmwareRequest";
import { UrnOCPPCp220203PublishFirmwareResponse } from "./types/PublishFirmwareResponse";
import { UrnOCPPCp220203PublishFirmwareStatusNotificationRequest } from "./types/PublishFirmwareStatusNotificationRequest";
import { UrnOCPPCp220203PublishFirmwareStatusNotificationResponse } from "./types/PublishFirmwareStatusNotificationResponse";
import { UrnOCPPCp220203ReportChargingProfilesRequest } from "./types/ReportChargingProfilesRequest";
import { UrnOCPPCp220203ReportChargingProfilesResponse } from "./types/ReportChargingProfilesResponse";
import { UrnOCPPCp220203RequestStartTransactionRequest } from "./types/RequestStartTransactionRequest";
import { UrnOCPPCp220203RequestStartTransactionResponse } from "./types/RequestStartTransactionResponse";
import { UrnOCPPCp220203RequestStopTransactionRequest } from "./types/RequestStopTransactionRequest";
import { UrnOCPPCp220203RequestStopTransactionResponse } from "./types/RequestStopTransactionResponse";
import { UrnOCPPCp220203ReservationStatusUpdateRequest } from "./types/ReservationStatusUpdateRequest";
import { UrnOCPPCp220203ReservationStatusUpdateResponse } from "./types/ReservationStatusUpdateResponse";
import { UrnOCPPCp220203ReserveNowRequest } from "./types/ReserveNowRequest";
import { UrnOCPPCp220203ReserveNowResponse } from "./types/ReserveNowResponse";
import { UrnOCPPCp220203ResetRequest } from "./types/ResetRequest";
import { UrnOCPPCp220203ResetResponse } from "./types/ResetResponse";
import { UrnOCPPCp220203SecurityEventNotificationRequest } from "./types/SecurityEventNotificationRequest";
import { UrnOCPPCp220203SecurityEventNotificationResponse } from "./types/SecurityEventNotificationResponse";
import { UrnOCPPCp220203SendLocalListRequest } from "./types/SendLocalListRequest";
import { UrnOCPPCp220203SendLocalListResponse } from "./types/SendLocalListResponse";
import { UrnOCPPCp220203SetChargingProfileRequest } from "./types/SetChargingProfileRequest";
import { UrnOCPPCp220203SetChargingProfileResponse } from "./types/SetChargingProfileResponse";
import { UrnOCPPCp220203SetDisplayMessageRequest } from "./types/SetDisplayMessageRequest";
import { UrnOCPPCp220203SetDisplayMessageResponse } from "./types/SetDisplayMessageResponse";
import { UrnOCPPCp220203SetMonitoringBaseRequest } from "./types/SetMonitoringBaseRequest";
import { UrnOCPPCp220203SetMonitoringBaseResponse } from "./types/SetMonitoringBaseResponse";
import { UrnOCPPCp220203SetMonitoringLevelRequest } from "./types/SetMonitoringLevelRequest";
import { UrnOCPPCp220203SetMonitoringLevelResponse } from "./types/SetMonitoringLevelResponse";
import { UrnOCPPCp220203SetNetworkProfileRequest } from "./types/SetNetworkProfileRequest";
import { UrnOCPPCp220203SetNetworkProfileResponse } from "./types/SetNetworkProfileResponse";
import { UrnOCPPCp220203SetVariableMonitoringRequest } from "./types/SetVariableMonitoringRequest";
import { UrnOCPPCp220203SetVariableMonitoringResponse } from "./types/SetVariableMonitoringResponse";
import { UrnOCPPCp220203SetVariablesRequest } from "./types/SetVariablesRequest";
import { UrnOCPPCp220203SetVariablesResponse } from "./types/SetVariablesResponse";
import { UrnOCPPCp220203SignCertificateRequest } from "./types/SignCertificateRequest";
import { UrnOCPPCp220203SignCertificateResponse } from "./types/SignCertificateResponse";
import { UrnOCPPCp220203StatusNotificationRequest } from "./types/StatusNotificationRequest";
import { UrnOCPPCp220203StatusNotificationResponse } from "./types/StatusNotificationResponse";
import { UrnOCPPCp220203TransactionEventRequest } from "./types/TransactionEventRequest";
import { UrnOCPPCp220203TransactionEventResponse } from "./types/TransactionEventResponse";
import { UrnOCPPCp220203TriggerMessageRequest } from "./types/TriggerMessageRequest";
import { UrnOCPPCp220203TriggerMessageResponse } from "./types/TriggerMessageResponse";
import { UrnOCPPCp220203UnlockConnectorRequest } from "./types/UnlockConnectorRequest";
import { UrnOCPPCp220203UnlockConnectorResponse } from "./types/UnlockConnectorResponse";
import { UrnOCPPCp220203UnpublishFirmwareRequest } from "./types/UnpublishFirmwareRequest";
import { UrnOCPPCp220203UnpublishFirmwareResponse } from "./types/UnpublishFirmwareResponse";
import { UrnOCPPCp220203UpdateFirmwareRequest } from "./types/UpdateFirmwareRequest";
import { UrnOCPPCp220203UpdateFirmwareResponse } from "./types/UpdateFirmwareResponse";

import { Client } from "./impl/Client";

export class OcppClient extends Client {
	connect(
		centralSystemUrl: string, headers?: OutgoingHttpHeaders
	) {
		super.connect(
			centralSystemUrl,
			headers
		);
	}

	disconnect() {
		super.disconnect();
	}

	on(event: "CancelReservation", listener: (request: UrnOCPPCp220203CancelReservationRequest, cb: (response: UrnOCPPCp220203CancelReservationResponse) => void) => void): this;
	on(event: "ChangeAvailability", listener: (request: UrnOCPPCp220203ChangeAvailabilityRequest, cb: (response: UrnOCPPCp220203ChangeAvailabilityResponse) => void) => void): this;
	on(event: "CertificateSigned", listener: (request: UrnOCPPCp220203CertificateSignedRequest, cb: (response: UrnOCPPCp220203CertificateSignedResponse) => void) => void): this;
	on(event: "ClearCache", listener: (request: UrnOCPPCp220203ClearCacheRequest, cb: (response: UrnOCPPCp220203ClearCacheResponse) => void) => void): this;
	on(event: "ClearChargingProfile", listener: (request: UrnOCPPCp220203ClearChargingProfileRequest, cb: (response: UrnOCPPCp220203ClearChargingProfileResponse) => void) => void): this;
	on(event: "ClearDisplayMessage", listener: (request: UrnOCPPCp220203ClearDisplayMessageRequest, cb: (response: UrnOCPPCp220203ClearDisplayMessageResponse) => void) => void): this;
	on(event: "ClearVariableMonitoring", listener: (request: UrnOCPPCp220203ClearVariableMonitoringRequest, cb: (response: UrnOCPPCp220203ClearVariableMonitoringResponse) => void) => void): this;
	on(event: "CostUpdated", listener: (request: UrnOCPPCp220203CostUpdatedRequest, cb: (response: UrnOCPPCp220203CostUpdatedResponse) => void) => void): this;
	on(event: "CustomerInformation", listener: (request: UrnOCPPCp220203CustomerInformationRequest, cb: (response: UrnOCPPCp220203CustomerInformationResponse) => void) => void): this;
	on(event: "DeleteCertificate", listener: (request: UrnOCPPCp220203DeleteCertificateRequest, cb: (response: UrnOCPPCp220203DeleteCertificateResponse) => void) => void): this;
	on(event: "GetBaseReport", listener: (request: UrnOCPPCp220203GetBaseReportRequest, cb: (response: UrnOCPPCp220203GetBaseReportResponse) => void) => void): this;
	on(event: "GetChargingProfilesReport", listener: (request: UrnOCPPCp220203GetChargingProfilesRequest, cb: (response: UrnOCPPCp220203GetChargingProfilesResponse) => void) => void): this;
	on(event: "GetDisplayMessages", listener: (request: UrnOCPPCp220203GetDisplayMessagesRequest, cb: (response: UrnOCPPCp220203GetDisplayMessagesResponse) => void) => void): this;
	on(event: "GetInstalledCertificateIds", listener: (request: UrnOCPPCp220203GetInstalledCertificateIdsRequest, cb: (response: UrnOCPPCp220203GetInstalledCertificateIdsResponse) => void) => void): this;
	on(event: "GetLog", listener: (request: UrnOCPPCp220203GetLogRequest, cb: (response: UrnOCPPCp220203GetLogResponse) => void) => void): this;
	on(event: "GetMonitoringReport", listener: (request: UrnOCPPCp220203GetMonitoringReportRequest, cb: (response: UrnOCPPCp220203GetMonitoringReportResponse) => void) => void): this;
	on(event: "GetReport", listener: (request: UrnOCPPCp220203GetReportRequest, cb: (response: UrnOCPPCp220203GetReportResponse) => void) => void): this;
	on(event: "GetTransactionStatus", listener: (request: UrnOCPPCp220203GetTransactionStatusRequest, cb: (response: UrnOCPPCp220203GetTransactionStatusResponse) => void) => void): this;
	on(event: "GetVariables", listener: (request: UrnOCPPCp220203GetVariablesRequest, cb: (response: UrnOCPPCp220203GetVariablesResponse) => void) => void): this;
	on(event: "InstallCertificate", listener: (request: UrnOCPPCp220203InstallCertificateRequest, cb: (response: UrnOCPPCp220203InstallCertificateResponse) => void) => void): this;
	on(event: "PublishFirmware", listener: (request: UrnOCPPCp220203PublishFirmwareRequest, cb: (response: UrnOCPPCp220203PublishFirmwareResponse) => void) => void): this;
	on(event: "RequestStartTransaction", listener: (request: UrnOCPPCp220203RequestStartTransactionRequest, cb: (response: UrnOCPPCp220203RequestStartTransactionResponse) => void) => void): this;
	on(event: "RequestStopTransaction", listener: (request: UrnOCPPCp220203RequestStopTransactionRequest, cb: (response: UrnOCPPCp220203RequestStopTransactionResponse) => void) => void): this;
	on(event: "SetDisplayMessage", listener: (request: UrnOCPPCp220203SetDisplayMessageRequest, cb: (response: UrnOCPPCp220203SetDisplayMessageResponse) => void) => void): this;
	on(event: "SetMonitoringBase", listener: (request: UrnOCPPCp220203SetMonitoringBaseRequest, cb: (response: UrnOCPPCp220203SetMonitoringBaseResponse) => void) => void): this;
	on(event: "SetMonitoringLevel", listener: (request: UrnOCPPCp220203SetMonitoringLevelRequest, cb: (response: UrnOCPPCp220203SetMonitoringLevelResponse) => void) => void): this;
	on(event: "SetNetworkProfile", listener: (request: UrnOCPPCp220203SetNetworkProfileRequest, cb: (response: UrnOCPPCp220203SetNetworkProfileResponse) => void) => void): this;
	on(event: "SetVariableMonitoring", listener: (request: UrnOCPPCp220203SetVariableMonitoringRequest, cb: (response: UrnOCPPCp220203SetVariableMonitoringResponse) => void) => void): this;
	on(event: "SetVariables", listener: (request: UrnOCPPCp220203SetVariablesRequest, cb: (response: UrnOCPPCp220203SetVariablesResponse) => void) => void): this;
	on(event: "UnpublishFirmware", listener: (request: UrnOCPPCp220203UnpublishFirmwareRequest, cb: (response: UrnOCPPCp220203UnpublishFirmwareResponse) => void) => void): this;
	on(event: "DataTransfer", listener: (request: UrnOCPPCp220203DataTransferRequest, cb: (response: UrnOCPPCp220203DataTransferResponse) => void) => void): this;
	on(event: "GetCompositeSchedule", listener: (request: UrnOCPPCp220203GetCompositeScheduleRequest, cb: (response: UrnOCPPCp220203GetCompositeScheduleResponse) => void) => void): this;
	on(event: "GetLocalListVersion", listener: (request: UrnOCPPCp220203GetLocalListVersionRequest, cb: (response: UrnOCPPCp220203GetLocalListVersionResponse) => void) => void): this;
	on(event: "ReserveNow", listener: (request: UrnOCPPCp220203ReserveNowRequest, cb: (response: UrnOCPPCp220203ReserveNowResponse) => void) => void): this;
	on(event: "Reset", listener: (request: UrnOCPPCp220203ResetRequest, cb: (response: UrnOCPPCp220203ResetResponse) => void) => void): this;
	on(event: "SendLocalList", listener: (request: UrnOCPPCp220203SendLocalListRequest, cb: (response: UrnOCPPCp220203SendLocalListResponse) => void) => void): this;
	on(event: "SetChargingProfile", listener: (request: UrnOCPPCp220203SetChargingProfileRequest, cb: (response: UrnOCPPCp220203SetChargingProfileResponse) => void) => void): this;
	on(event: "TriggerMessage", listener: (request: UrnOCPPCp220203TriggerMessageRequest, cb: (response: UrnOCPPCp220203TriggerMessageResponse) => void) => void): this;
	on(event: "UnlockConnector", listener: (request: UrnOCPPCp220203UnlockConnectorRequest, cb: (response: UrnOCPPCp220203UnlockConnectorResponse) => void) => void): this;
	on(event: "UpdateFirmware", listener: (request: UrnOCPPCp220203UpdateFirmwareRequest, cb: (response: UrnOCPPCp220203UpdateFirmwareResponse) => void) => void): this;
	on(event: "connect", listener: () => void): this;
	on(event: "close", listener: (code: number, reason: Buffer) => void): this;
	on(event: "error", listener: (err: Error) => void): this;
	on(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		event: string | symbol, listener: (...args: any[]) => void
	) {
		return super.on(
			event,
			listener
		);
	}

	callRequest(request: "Authorize", payload: UrnOCPPCp220203AuthorizeRequest): Promise<UrnOCPPCp220203AuthorizeResponse>;
	callRequest(request: "BootNotification", payload: UrnOCPPCp220203BootNotificationRequest): Promise<UrnOCPPCp220203BootNotificationResponse>;
	callRequest(request: "ClearedChargingLimit", payload: UrnOCPPCp220203ClearedChargingLimitRequest): Promise<UrnOCPPCp220203ClearedChargingLimitResponse>;
	callRequest(request: "DataTransfer", payload: UrnOCPPCp220203DataTransferRequest): Promise<UrnOCPPCp220203DataTransferResponse>;
	callRequest(request: "Get15118EVCertificate", payload: UrnOCPPCp220203Get15118EVCertificateRequest): Promise<UrnOCPPCp220203Get15118EVCertificateResponse>;
	callRequest(request: "GetCertificateStatus", payload: UrnOCPPCp220203GetCertificateStatusRequest): Promise<UrnOCPPCp220203GetCertificateStatusResponse>;
	callRequest(request: "LogStatusNotification", payload: UrnOCPPCp220203LogStatusNotificationRequest): Promise<UrnOCPPCp220203LogStatusNotificationResponse>;
	callRequest(request: "NotifyChargingLimit", payload: UrnOCPPCp220203NotifyChargingLimitRequest): Promise<UrnOCPPCp220203NotifyChargingLimitResponse>;
	callRequest(request: "NotifyCustomerInformation", payload: UrnOCPPCp220203NotifyCustomerInformationRequest): Promise<UrnOCPPCp220203NotifyCustomerInformationResponse>;
	callRequest(request: "NotifyDisplayMessages", payload: UrnOCPPCp220203NotifyDisplayMessagesRequest): Promise<UrnOCPPCp220203NotifyDisplayMessagesResponse>;
	callRequest(request: "NotifyEVChargingNeeds", payload: UrnOCPPCp220203NotifyEVChargingNeedsRequest): Promise<UrnOCPPCp220203NotifyEVChargingNeedsResponse>;
	callRequest(request: "NotifyEVChargingSchedule", payload: UrnOCPPCp220203NotifyEVChargingScheduleRequest): Promise<UrnOCPPCp220203NotifyEVChargingScheduleResponse>;
	callRequest(request: "NotifyEvent", payload: UrnOCPPCp220203NotifyEventRequest): Promise<UrnOCPPCp220203NotifyEventResponse>;
	callRequest(request: "NotifyMonitoringReport", payload: UrnOCPPCp220203NotifyMonitoringReportRequest): Promise<UrnOCPPCp220203NotifyMonitoringReportResponse>;
	callRequest(request: "NotifyReport", payload: UrnOCPPCp220203NotifyReportRequest): Promise<UrnOCPPCp220203NotifyReportResponse>;
	callRequest(request: "PublishFirmwareStatusNotification", payload: UrnOCPPCp220203PublishFirmwareStatusNotificationRequest): Promise<UrnOCPPCp220203PublishFirmwareStatusNotificationResponse>;
	callRequest(request: "ReportChargingProfiles", payload: UrnOCPPCp220203ReportChargingProfilesRequest): Promise<UrnOCPPCp220203ReportChargingProfilesResponse>;
	callRequest(request: "ReservationStatusUpdate", payload: UrnOCPPCp220203ReservationStatusUpdateRequest): Promise<UrnOCPPCp220203ReservationStatusUpdateResponse>;
	callRequest(request: "SecurityEventNotification", payload: UrnOCPPCp220203SecurityEventNotificationRequest): Promise<UrnOCPPCp220203SecurityEventNotificationResponse>;
	callRequest(request: "SignCertificate", payload: UrnOCPPCp220203SignCertificateRequest): Promise<UrnOCPPCp220203SignCertificateResponse>;
	callRequest(request: "TransactionEvent", payload: UrnOCPPCp220203TransactionEventRequest): Promise<UrnOCPPCp220203TransactionEventResponse>;
	callRequest(request: "FirmwareStatusNotification", payload: UrnOCPPCp220203FirmwareStatusNotificationRequest): Promise<UrnOCPPCp220203FirmwareStatusNotificationResponse>;
	callRequest(request: "Heartbeat", payload: UrnOCPPCp220203HeartbeatRequest): Promise<UrnOCPPCp220203HeartbeatResponse>;
	callRequest(request: "MeterValues", payload: UrnOCPPCp220203MeterValuesRequest): Promise<UrnOCPPCp220203MeterValuesResponse>;
	callRequest(request: "StatusNotification", payload: UrnOCPPCp220203StatusNotificationRequest): Promise<UrnOCPPCp220203StatusNotificationResponse>;
	callRequest(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		request: string, payload: any
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): Promise<any> {
		return super.callRequest(
			request,
			payload
		);
	}
}

export default OcppClient;
