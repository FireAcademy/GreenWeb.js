import fields from './fields';
import { assert } from 'chai';
import { uint, bytes, Optional } from "./basic_types";
import { Serializer } from "./serializer";
import { SExp } from "clvm";

// chia.test.ts does not cover a few lines of code
// they were bugging me in the test coverage table

class TestClassBytes {
    @fields.Bytes() a: bytes;
}

class TestClassBytes32 {
    @fields.Bytes(32) a: bytes;
}

it("Chia TestStreamable - test_parse_bytes (extra)", () => {
    assert.throws(
        () => Serializer.deserialize(TestClassBytes, Buffer.from([]))
    );

    assert.throws(
        () => Serializer.deserialize(TestClassBytes32, Buffer.from("a".repeat(31)))
    );
});

class TestClassList {
    @fields.List(fields.Uint(8)) a: uint[];
}

it("Chia TestStreamable - test_parse_list (extra)", () => {
    assert.throws(
        () => Serializer.deserialize(TestClassList, Buffer.from([]))
    );
});