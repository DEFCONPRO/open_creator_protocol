/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'

/**
 * Arguments used to create {@link Policy}
 * @category Accounts
 * @category generated
 */
export type PolicyArgs = {
  version: number
  bump: number[] /* size: 1 */
  updateAuthority: web3.PublicKey
  updateAuthorityNonce: number[] /* size: 1 */
  jsonRule: string
}

export const policyDiscriminator = [222, 135, 7, 163, 235, 177, 33, 68]
/**
 * Holds the data for the {@link Policy} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class Policy implements PolicyArgs {
  private constructor(
    readonly version: number,
    readonly bump: number[] /* size: 1 */,
    readonly updateAuthority: web3.PublicKey,
    readonly updateAuthorityNonce: number[] /* size: 1 */,
    readonly jsonRule: string
  ) {}

  /**
   * Creates a {@link Policy} instance from the provided args.
   */
  static fromArgs(args: PolicyArgs) {
    return new Policy(
      args.version,
      args.bump,
      args.updateAuthority,
      args.updateAuthorityNonce,
      args.jsonRule
    )
  }

  /**
   * Deserializes the {@link Policy} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [Policy, number] {
    return Policy.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link Policy} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey
  ): Promise<Policy> {
    const accountInfo = await connection.getAccountInfo(address)
    if (accountInfo == null) {
      throw new Error(`Unable to find Policy account at ${address}`)
    }
    return Policy.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      'mtokYxNhZEihbDq3r6LX22pLKnpuQvXV5kwhgCDCWw4'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, policyBeet)
  }

  /**
   * Deserializes the {@link Policy} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [Policy, number] {
    return policyBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link Policy} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return policyBeet.serialize({
      accountDiscriminator: policyDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link Policy} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: PolicyArgs) {
    const instance = Policy.fromArgs(args)
    return policyBeet.toFixedFromValue({
      accountDiscriminator: policyDiscriminator,
      ...instance,
    }).byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link Policy} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: PolicyArgs,
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      Policy.byteSize(args),
      commitment
    )
  }

  /**
   * Returns a readable version of {@link Policy} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      version: this.version,
      bump: this.bump,
      updateAuthority: this.updateAuthority.toBase58(),
      updateAuthorityNonce: this.updateAuthorityNonce,
      jsonRule: this.jsonRule,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const policyBeet = new beet.FixableBeetStruct<
  Policy,
  PolicyArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['version', beet.u8],
    ['bump', beet.uniformFixedSizeArray(beet.u8, 1)],
    ['updateAuthority', beetSolana.publicKey],
    ['updateAuthorityNonce', beet.uniformFixedSizeArray(beet.u8, 1)],
    ['jsonRule', beet.utf8String],
  ],
  Policy.fromArgs,
  'Policy'
)
