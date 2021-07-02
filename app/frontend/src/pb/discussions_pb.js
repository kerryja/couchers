// source: pb/discussions.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var pb_threads_pb = require('../pb/threads_pb.js');
goog.object.extend(proto, pb_threads_pb);
goog.exportSymbol('proto.org.couchers.api.discussions.CreateDiscussionReq', null, global);
goog.exportSymbol('proto.org.couchers.api.discussions.CreateDiscussionReq.OwnerCase', null, global);
goog.exportSymbol('proto.org.couchers.api.discussions.Discussion', null, global);
goog.exportSymbol('proto.org.couchers.api.discussions.Discussion.OwnerCase', null, global);
goog.exportSymbol('proto.org.couchers.api.discussions.GetDiscussionReq', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.org.couchers.api.discussions.Discussion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.org.couchers.api.discussions.Discussion.oneofGroups_);
};
goog.inherits(proto.org.couchers.api.discussions.Discussion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.org.couchers.api.discussions.Discussion.displayName = 'proto.org.couchers.api.discussions.Discussion';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.org.couchers.api.discussions.CreateDiscussionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.org.couchers.api.discussions.CreateDiscussionReq.oneofGroups_);
};
goog.inherits(proto.org.couchers.api.discussions.CreateDiscussionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.org.couchers.api.discussions.CreateDiscussionReq.displayName = 'proto.org.couchers.api.discussions.CreateDiscussionReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.org.couchers.api.discussions.GetDiscussionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.org.couchers.api.discussions.GetDiscussionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.org.couchers.api.discussions.GetDiscussionReq.displayName = 'proto.org.couchers.api.discussions.GetDiscussionReq';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.org.couchers.api.discussions.Discussion.oneofGroups_ = [[5,6]];

/**
 * @enum {number}
 */
proto.org.couchers.api.discussions.Discussion.OwnerCase = {
  OWNER_NOT_SET: 0,
  OWNER_COMMUNITY_ID: 5,
  OWNER_GROUP_ID: 6
};

/**
 * @return {proto.org.couchers.api.discussions.Discussion.OwnerCase}
 */
proto.org.couchers.api.discussions.Discussion.prototype.getOwnerCase = function() {
  return /** @type {proto.org.couchers.api.discussions.Discussion.OwnerCase} */(jspb.Message.computeOneofCase(this, proto.org.couchers.api.discussions.Discussion.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.org.couchers.api.discussions.Discussion.prototype.toObject = function(opt_includeInstance) {
  return proto.org.couchers.api.discussions.Discussion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.org.couchers.api.discussions.Discussion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.org.couchers.api.discussions.Discussion.toObject = function(includeInstance, msg) {
  var f, obj = {
    discussionId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    slug: jspb.Message.getFieldWithDefault(msg, 2, ""),
    created: (f = msg.getCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    creatorUserId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    ownerCommunityId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    ownerGroupId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    title: jspb.Message.getFieldWithDefault(msg, 7, ""),
    content: jspb.Message.getFieldWithDefault(msg, 8, ""),
    thread: (f = msg.getThread()) && pb_threads_pb.Thread.toObject(includeInstance, f),
    canModerate: jspb.Message.getBooleanFieldWithDefault(msg, 10, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.org.couchers.api.discussions.Discussion}
 */
proto.org.couchers.api.discussions.Discussion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.org.couchers.api.discussions.Discussion;
  return proto.org.couchers.api.discussions.Discussion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.org.couchers.api.discussions.Discussion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.org.couchers.api.discussions.Discussion}
 */
proto.org.couchers.api.discussions.Discussion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDiscussionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSlug(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreated(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatorUserId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOwnerCommunityId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOwnerGroupId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 11:
      var value = new pb_threads_pb.Thread;
      reader.readMessage(value,pb_threads_pb.Thread.deserializeBinaryFromReader);
      msg.setThread(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanModerate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.org.couchers.api.discussions.Discussion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.org.couchers.api.discussions.Discussion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.org.couchers.api.discussions.Discussion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.org.couchers.api.discussions.Discussion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDiscussionId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSlug();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreated();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreatorUserId();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getThread();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      pb_threads_pb.Thread.serializeBinaryToWriter
    );
  }
  f = message.getCanModerate();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional int64 discussion_id = 1;
 * @return {number}
 */
proto.org.couchers.api.discussions.Discussion.prototype.getDiscussionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.org.couchers.api.discussions.Discussion} returns this
 */
proto.org.couchers.api.discussions.Discussion.prototype.setDiscussionId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string slug = 2;
 * @return {string}
 */
proto.org.couchers.api.discussions.Discussion.prototype.getSlug = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.org.couchers.api.discussions.Discussion} returns this
 */
proto.org.couchers.api.discussions.Discussion.prototype.setSlug = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp created = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.org.couchers.api.discussions.Discussion.prototype.getCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.org.couchers.api.discussions.Discussion} returns this
*/
proto.org.couchers.api.discussions.Discussion.prototype.setCreated = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.org.couchers.api.discussions.Discussion} returns this
 */
proto.org.couchers.api.discussions.Discussion.prototype.clearCreated = function() {
  return this.setCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.org.couchers.api.discussions.Discussion.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 creator_user_id = 4;
 * @return {number}
 */
proto.org.couchers.api.discussions.Discussion.prototype.getCreatorUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.org.couchers.api.discussions.Discussion} returns this
 */
proto.org.couchers.api.discussions.Discussion.prototype.setCreatorUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 owner_community_id = 5;
 * @return {number}
 */
proto.org.couchers.api.discussions.Discussion.prototype.getOwnerCommunityId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.org.couchers.api.discussions.Discussion} returns this
 */
proto.org.couchers.api.discussions.Discussion.prototype.setOwnerCommunityId = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.org.couchers.api.discussions.Discussion.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.org.couchers.api.discussions.Discussion} returns this
 */
proto.org.couchers.api.discussions.Discussion.prototype.clearOwnerCommunityId = function() {
  return jspb.Message.setOneofField(this, 5, proto.org.couchers.api.discussions.Discussion.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.org.couchers.api.discussions.Discussion.prototype.hasOwnerCommunityId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 owner_group_id = 6;
 * @return {number}
 */
proto.org.couchers.api.discussions.Discussion.prototype.getOwnerGroupId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.org.couchers.api.discussions.Discussion} returns this
 */
proto.org.couchers.api.discussions.Discussion.prototype.setOwnerGroupId = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.org.couchers.api.discussions.Discussion.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.org.couchers.api.discussions.Discussion} returns this
 */
proto.org.couchers.api.discussions.Discussion.prototype.clearOwnerGroupId = function() {
  return jspb.Message.setOneofField(this, 6, proto.org.couchers.api.discussions.Discussion.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.org.couchers.api.discussions.Discussion.prototype.hasOwnerGroupId = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string title = 7;
 * @return {string}
 */
proto.org.couchers.api.discussions.Discussion.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.org.couchers.api.discussions.Discussion} returns this
 */
proto.org.couchers.api.discussions.Discussion.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string content = 8;
 * @return {string}
 */
proto.org.couchers.api.discussions.Discussion.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.org.couchers.api.discussions.Discussion} returns this
 */
proto.org.couchers.api.discussions.Discussion.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional org.couchers.api.threads.Thread thread = 11;
 * @return {?proto.org.couchers.api.threads.Thread}
 */
proto.org.couchers.api.discussions.Discussion.prototype.getThread = function() {
  return /** @type{?proto.org.couchers.api.threads.Thread} */ (
    jspb.Message.getWrapperField(this, pb_threads_pb.Thread, 11));
};


/**
 * @param {?proto.org.couchers.api.threads.Thread|undefined} value
 * @return {!proto.org.couchers.api.discussions.Discussion} returns this
*/
proto.org.couchers.api.discussions.Discussion.prototype.setThread = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.org.couchers.api.discussions.Discussion} returns this
 */
proto.org.couchers.api.discussions.Discussion.prototype.clearThread = function() {
  return this.setThread(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.org.couchers.api.discussions.Discussion.prototype.hasThread = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool can_moderate = 10;
 * @return {boolean}
 */
proto.org.couchers.api.discussions.Discussion.prototype.getCanModerate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.org.couchers.api.discussions.Discussion} returns this
 */
proto.org.couchers.api.discussions.Discussion.prototype.setCanModerate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.org.couchers.api.discussions.CreateDiscussionReq.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.org.couchers.api.discussions.CreateDiscussionReq.OwnerCase = {
  OWNER_NOT_SET: 0,
  OWNER_COMMUNITY_ID: 3,
  OWNER_GROUP_ID: 4
};

/**
 * @return {proto.org.couchers.api.discussions.CreateDiscussionReq.OwnerCase}
 */
proto.org.couchers.api.discussions.CreateDiscussionReq.prototype.getOwnerCase = function() {
  return /** @type {proto.org.couchers.api.discussions.CreateDiscussionReq.OwnerCase} */(jspb.Message.computeOneofCase(this, proto.org.couchers.api.discussions.CreateDiscussionReq.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.org.couchers.api.discussions.CreateDiscussionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.org.couchers.api.discussions.CreateDiscussionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.org.couchers.api.discussions.CreateDiscussionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.org.couchers.api.discussions.CreateDiscussionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    content: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ownerCommunityId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    ownerGroupId: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.org.couchers.api.discussions.CreateDiscussionReq}
 */
proto.org.couchers.api.discussions.CreateDiscussionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.org.couchers.api.discussions.CreateDiscussionReq;
  return proto.org.couchers.api.discussions.CreateDiscussionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.org.couchers.api.discussions.CreateDiscussionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.org.couchers.api.discussions.CreateDiscussionReq}
 */
proto.org.couchers.api.discussions.CreateDiscussionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOwnerCommunityId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOwnerGroupId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.org.couchers.api.discussions.CreateDiscussionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.org.couchers.api.discussions.CreateDiscussionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.org.couchers.api.discussions.CreateDiscussionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.org.couchers.api.discussions.CreateDiscussionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.org.couchers.api.discussions.CreateDiscussionReq.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.org.couchers.api.discussions.CreateDiscussionReq} returns this
 */
proto.org.couchers.api.discussions.CreateDiscussionReq.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.org.couchers.api.discussions.CreateDiscussionReq.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.org.couchers.api.discussions.CreateDiscussionReq} returns this
 */
proto.org.couchers.api.discussions.CreateDiscussionReq.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 owner_community_id = 3;
 * @return {number}
 */
proto.org.couchers.api.discussions.CreateDiscussionReq.prototype.getOwnerCommunityId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.org.couchers.api.discussions.CreateDiscussionReq} returns this
 */
proto.org.couchers.api.discussions.CreateDiscussionReq.prototype.setOwnerCommunityId = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.org.couchers.api.discussions.CreateDiscussionReq.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.org.couchers.api.discussions.CreateDiscussionReq} returns this
 */
proto.org.couchers.api.discussions.CreateDiscussionReq.prototype.clearOwnerCommunityId = function() {
  return jspb.Message.setOneofField(this, 3, proto.org.couchers.api.discussions.CreateDiscussionReq.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.org.couchers.api.discussions.CreateDiscussionReq.prototype.hasOwnerCommunityId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 owner_group_id = 4;
 * @return {number}
 */
proto.org.couchers.api.discussions.CreateDiscussionReq.prototype.getOwnerGroupId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.org.couchers.api.discussions.CreateDiscussionReq} returns this
 */
proto.org.couchers.api.discussions.CreateDiscussionReq.prototype.setOwnerGroupId = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.org.couchers.api.discussions.CreateDiscussionReq.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.org.couchers.api.discussions.CreateDiscussionReq} returns this
 */
proto.org.couchers.api.discussions.CreateDiscussionReq.prototype.clearOwnerGroupId = function() {
  return jspb.Message.setOneofField(this, 4, proto.org.couchers.api.discussions.CreateDiscussionReq.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.org.couchers.api.discussions.CreateDiscussionReq.prototype.hasOwnerGroupId = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.org.couchers.api.discussions.GetDiscussionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.org.couchers.api.discussions.GetDiscussionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.org.couchers.api.discussions.GetDiscussionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.org.couchers.api.discussions.GetDiscussionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    discussionId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.org.couchers.api.discussions.GetDiscussionReq}
 */
proto.org.couchers.api.discussions.GetDiscussionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.org.couchers.api.discussions.GetDiscussionReq;
  return proto.org.couchers.api.discussions.GetDiscussionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.org.couchers.api.discussions.GetDiscussionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.org.couchers.api.discussions.GetDiscussionReq}
 */
proto.org.couchers.api.discussions.GetDiscussionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDiscussionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.org.couchers.api.discussions.GetDiscussionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.org.couchers.api.discussions.GetDiscussionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.org.couchers.api.discussions.GetDiscussionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.org.couchers.api.discussions.GetDiscussionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDiscussionId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 discussion_id = 1;
 * @return {number}
 */
proto.org.couchers.api.discussions.GetDiscussionReq.prototype.getDiscussionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.org.couchers.api.discussions.GetDiscussionReq} returns this
 */
proto.org.couchers.api.discussions.GetDiscussionReq.prototype.setDiscussionId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


goog.object.extend(exports, proto.org.couchers.api.discussions);
