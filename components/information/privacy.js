import styled from "styled-components";
import { ContainerInner, Container } from "./information-styles";

export default function Privacy() {
  return (
    <article>
      <Container style={{ marginBottom: 0 }}>
        <ContainerInner>
          <h3>Privacy policy</h3>

          <div>
            <p>
              Guarding the{" "}
              <strong style={{ color: "var(--accent)" }}>
                privacy and safety
              </strong>{" "}
              of your data is very important to us. This policy outlines what we
              collect about you, and how we use, share, and manage this data.
              Please read it carefully.
            </p>
          </div>
        </ContainerInner>

        <ContainerInner>
          <h3
            style={{
              marginBottom: "1.5rem",
              letterSpacing: "unset",
            }}
          >
            What we collect and why
          </h3>
          <Table>
            <TableHead>
              <TableRow>
                <Tablehead>Data Category</Tablehead>
                <Tablehead>Purpose</Tablehead>
                <Tablehead>Sources</Tablehead>
              </TableRow>
            </TableHead>
            <Tbody>
              <tr>
                <TD>
                  Identifiers – e.g. name, email address, physical address,
                  phone number etc.
                </TD>
                <TD>
                  We may use this data in order to identify you, deliver goods
                  and services to you, market to you, personalize our goods and
                  services to you, associate other data with you, analyze other
                  data we collect.
                </TD>
                <TD>
                  We obtain this data directly from you when you order goods or
                  services and when you sign up for our services or marketing.
                </TD>
              </tr>

              <tr>
                <TD>
                  Commercial information – e.g. payment information, purchasing
                  history, product or service interests, product reviews, etc.
                </TD>
                <TD>
                  We use this data to personalize our goods and services to you,
                  market to you, analyze other data we collect, identify other
                  potential customers.
                </TD>
                <TD>
                  We obtain this data from you when you order or browse products
                  and services (e.g. purchase history) and when you provide us
                  that information (e.g. product reviews).
                </TD>
              </tr>
            </Tbody>
          </Table>
        </ContainerInner>
        <ContainerInner>
          <h3>How we protect your data</h3>
          <p>
            <strong style={{ color: "var(--accent)" }}>
              {" "}
              The privacy and security of your data is important to us
            </strong>{" "}
            . We use digital and physical security and process controls to
            protect your data. We encrypt and anonymize data where we can and it
            makes sense. Even inside our company, we limit access to your data
            as much as we can and where it makes sense.
          </p>

          <p>
            We need your help to keep your data safe! When you make an account,
            we ask you to pick a password. If you give a friend your password,
            it is much harder for us to keep your data safe. You also{" "}
            <strong style={{ color: "var(--accent)" }}> should not</strong> use
            the same password across multiple websites or apps. That makes your
            data much less safe, and it’s very hard for us to protect you from
            someone else’s breach.
          </p>
          <p>
            <strong style={{ color: "var(--accent)" }}> BAD HUMANS</strong> are
            tricky! They may pretend to be us to trick you into giving them your
            data. Don’t get tricked, we will never ask you for your password,
            whether in email, on line chat, phone call, or in person.
          </p>

          <p>
            <strong style={{ color: "var(--accent)" }}> POLICY CHANGES</strong>{" "}
            We may update this Policy from time to time. We’ll post the new
            policy here.
          </p>
          <p>
            <strong style={{ color: "var(--accent)" }}> MINORS</strong> Under age
            13. We do not want to and do not knowingly collect any data from
            people under age 13. If we learn that we collected any such data, we
            will take all reasonable measures to delete that information and to
            not use it for any purpose (except where necessary to protect the
            safety of the child or others as required or allowed by law). If you
            become aware of any personal information we have collected from
            children under 13, please contact us at the addresses listed below.
          </p>
        </ContainerInner>
      </Container>
    </article>
  );
}

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  display: block;
  overflow-x: auto;
  text-indent: initial;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    display: table;
  }
`;

const TableHead = styled.thead``;

const TableRow = styled.tr`
  background-color: #222;
`;

const Tablehead = styled.th`
  margin-bottom: 0;
  letter-spacing: var(--ls-sm);
  height: 44px;
  padding: 10px;
  border: 1px solid var(--border-color);
  text-align: center;
`;

const Tbody = styled.tbody`
  display: table-row-group;
`;

const TD = styled.td`
  margin-bottom: 15px;
  height: auto;
  margin-bottom: 0;
  padding: 5px 10px;
  border: 1px solid var(--border-color);
  vertical-align: top;
  text-align: start;

  @media (min-width: 768px) {
    padding: 15px 10px;
    vertical-align: middle;
  }
`;
