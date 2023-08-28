export default interface PropertiesChangedEvent extends CustomEvent {
	detail: { properties: object; };
}